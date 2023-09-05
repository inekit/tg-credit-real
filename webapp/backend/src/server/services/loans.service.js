const tOrmCon = require("../../db/connection");
const checkInputData = require("../utils/checkInputData");
const {
  HttpError,
  MySqlError,
  NotFoundError,
  NoInputDataError,
} = require("../utils/httpErrors");

class BasketsService {
  constructor() {
    this.getLoanCalculation = this.getLoanCalculation.bind(this);
    this.getUserActiveAppointment = this.getUserActiveAppointment.bind(this);
    this.addLoanAppointment = this.addLoanAppointment.bind(this);
    this.changeLoanStatus = this.changeLoanStatus.bind(this);
    this.getLoans = this.getLoans.bind(this);
  }

  getLoanCalculation({ term_days, sum }) {
    return new Promise(async (res, rej) => {
      if (!sum || !term_days)
        return rej(new NoInputDataError({ sum, term_days }));

      if (sum < 1000 || sum < 1000000)
        return rej({ error: "Недопустимая сумма займа" });

      if (term_days < 0 || term_days > 30)
        return rej({ error: "Недопустимый срок займа" });

      res({
        return_sum: sum + (sum / 100) * term_days,
      });
    });
  }

  getLoans({
    id,
    page = 1,
    take = 10,
    searchQuery,
    admin_id,
    user_id,
    status,
    order = "id",
    orderDesc,
  }) {
    return new Promise(async (res, rej) => {
      const skip = (page - 1) * take;
      searchQuery = searchQuery ? `%${searchQuery}%` : null;
      user_id = user_id || null;
      admin_id = admin_id || null;
      status = status || null;

      const connection = await tOrmCon;
      {
        const query = `select l.*, u.username,
        l.surname||' '|| l.name || ' ' || l.patronymic as fio
                    from public.loans l
                    left join users u on u.id = l.user_id
                    where (lower(l.name) like lower($1) or lower(l.surname) like lower($1) or lower(l.patronymic) like lower($1) or $1 is NULL)
                    and (l.aprooved_by_id = $2 or $2 is NULL)  
                    and (l.user_id = $3 or $3 is NULL)  
                    and (l.status = $4 or $4 is NULL)
                    and (l.id = $5 or $5 is NULL)
                    group by l.id, u.username
                    ORDER BY ${
                      ["id", "creation_date", "status"].includes(order)
                        ? "l." + order
                        : "l.id"
                    } ${orderDesc === "true" ? "DESC" : ""}
                    LIMIT $6 OFFSET $7`;
        connection
          .query(query, [
            searchQuery,
            admin_id,
            user_id,
            status,
            id,
            take,
            skip,
          ])
          .then((data) => res(data))
          .catch((error) => rej(new MySqlError(error)));
      }
    });
  }

  getUserActiveAppointment({ user_id }) {
    return new Promise(async (res, rej) => {
      const connection = await tOrmCon;

      connection
        .query(
          `select * from loans where user_id = $1 and status = 'Новый' 
          limit 1`,
          [user_id]
        )
        .then(async (data) => {
          const loan_appointment = data[0];
          return res(loan_appointment);
        })
        .catch((error) => {
          console.log(error);
          rej(new MySqlError(error));
        });
    });
  }

  addLoanAppointment({
    user_id,
    name,
    surname,
    patronymic,
    phone,
    birth_date,
    passport_photo,
    visa_photo,
    visa_expired_date,
    term_days,
    sum,
    country = "Тайланд",
  }) {
    return new Promise(async (res, rej) => {
      const connection = await tOrmCon;
      connection
        .getRepository("Loan")
        .save({
          user_id,
          name,
          surname,
          patronymic,
          phone,
          birth_date,
          passport_photo,
          visa_photo,
          visa_expired_date,
          term_days,
          sum,
          country,
        })
        .then((data) => res(data))
        .catch((error) => rej(new MySqlError(error)));
    });
  }

  changeLoanStatus({ user_id, status, isAdmin }) {
    return new Promise(async (res, rej) => {
      const connection = await tOrmCon;

      if (
        (isAdmin &&
          ["Новый", "Получен", "Отменен", "На возврате"].includes(status)) ||
        (!isAdmin && ["Новый", "Выдан", "Запрещен", "Закрыт"].includes(status))
      )
        return rej({ error: "Недопустимый статус заказа" });

      const queryRunner = connection.createQueryRunner();

      await queryRunner.connect();

      await queryRunner.startTransaction();

      try {
        const active_loan = (
          await queryRunner.query(
            "select * from loans where status <> 'Закрыт' and status <> 'Отменен' and status <> 'Запрещен' limit 1"
          )
        )?.[0];

        if (!active_loan?.status) rej({ error: "Нет активных займов" });

        if (
          (active_loan.status === "Новый" &&
            !["Выдан", "Отменен", "Запрещен"].includes(status)) ||
          (active_loan.status === "Выдан" && status !== "Получен") ||
          (active_loan.status === "Получен" && status !== "На возврате") ||
          (active_loan.status === "На возврате" && status !== "Закрыт")
        )
          rej({ error: "Более ранний статус заказа" });
        else {
          await connection
            .query(
              `update loans set status = $1 where user_id = $2 and status = $3`,
              [status, user_id, active_loan.status]
            )
            .catch((error) => rej(new MySqlError(error)))
            .then((data) => res(data));

          res({ count_users });
        }

        await queryRunner.commitTransaction();
      } catch (error) {
        console.log(error);
        await queryRunner.rollbackTransaction();

        rej(new MySqlError(error));
      } finally {
        await queryRunner.release();
      }
    });
  }
}

module.exports = new BasketsService();
