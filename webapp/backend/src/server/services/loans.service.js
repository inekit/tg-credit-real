const tOrmCon = require("../../db/connection");
const checkInputData = require("../utils/checkInputData");
const {
  HttpError,
  MySqlError,
  NotFoundError,
  NoInputDataError,
} = require("../utils/httpErrors");

class LoansService {
  constructor() {
    this.getLoanCalculation = this.getLoanCalculation.bind(this);
    this.getUserActiveAppointment = this.getUserActiveAppointment.bind(this);
    this.addLoanAppointment = this.addLoanAppointment.bind(this);
    this.changeLoanStatus = this.changeLoanStatus.bind(this);
    this.saveReturningFileName = this.saveReturningFileName.bind(this);
    this.getLoans = this.getLoans.bind(this);
    this.getCount = this.getCount.bind(this);
  }

  getCount({ searchQuery, admin_id, user_id, status }) {
    return new Promise(async (res, rej) => {
      searchQuery = searchQuery ? `%${searchQuery}%` : null;

      const connection = await tOrmCon;

      connection
        .query(
          `select count(l.id)
            from public.loans l
            where (lower(l.name) like lower($1) or lower(l.surname) like lower($1) or lower(l.patronymic) like lower($1) or $1 is NULL)
            and (l.aprooved_by_id = $2 or $2 is NULL)  
            and (l.user_id = $3 or $3 is NULL)  
            and (l.status = $4 or $4 is NULL)
            group by l.id
            ORDER BY l.id`,
          [searchQuery, admin_id, user_id, status]
        )
        .then(async (data) => {
          return res({ orders_count: data.length });
        })
        .catch((error) => {
          console.log(error);
          rej(new MySqlError(error));
        });
    });
  }

  getLoanCalculation({ term_days, sum }) {
    return new Promise(async (res, rej) => {
      if (!sum || !term_days)
        return rej(new NoInputDataError({ sum, term_days }));

      if (sum < 1000 || sum > 1000000)
        return rej({ error: "Недопустимая сумма займа" });

      if (term_days < 0 || term_days > 30)
        return rej({ error: "Недопустимый срок займа" });

      res({
        return_sum: (+sum + +(sum / 100) * term_days).toFixed(0),
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
                    where 
                      (lower(l.name) like lower($1) 
                      or lower(l.surname) like lower($1) 
                      or lower(l.patronymic) like lower($1) 
                      or l.user_id::varchar like $1
                      or l.aprooved_by_id::varchar like $1
                      or lower(u.username) like lower($1) 
                      or $1 is NULL)
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

  async saveReturningFileName(image, isPreview) {
    if (typeof image === String) return image;

    let fName = image?.name;
    console.log(image);

    let fNameFullPath;
    if (fName) {
      let fNameSplit = fName.split(".");
      const fileFormat = fNameSplit[fNameSplit.length - 1];
      fNameFullPath = image.md5 + "." + fileFormat;
      await image?.mv("public/pics/" + fNameFullPath);

      console.log(image.mimetype.split("/")[0]);

      if (fileFormat !== "webp" && image.mimetype.split("/")[0] === "image")
        await webp
          .cwebp(
            `public/pics/${fNameFullPath}`,
            `public/pics/${image.md5}.webp`,
            "-q 80"
          )
          .then(async (r) => {
            if (isPreview) {
              await webp
                .cwebp(
                  `public/pics/${fNameFullPath}`,
                  `public/pics/${image.md5}_preview.webp`,
                  "-q 90 -resize 480 0"
                )
                .catch((e) => console.log(e));
            }
            await fs.unlink(`public/pics/${fNameFullPath}`).catch((e) => {});
            fNameFullPath = image.md5 + ".webp";
          })
          .catch((e) => {
            console.log(e);
          });
    }
    return fNameFullPath;
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
    visa_preview,
    passport_preview,
  }) {
    return new Promise(async (res, rej) => {
      const connection = await tOrmCon;

      const queryRunner = connection.createQueryRunner();

      await queryRunner.connect();

      await queryRunner.startTransaction();

      try {
        const passportPreviewName = previewBinary
          ? await this.saveReturningFileName(passport_photo, true)
          : passport_preview;
        const visaPreviewName = previewBinary
          ? await this.saveReturningFileName(visa_photo, true)
          : visa_preview;

        connection
          .getRepository("Loan")
          .save({
            user_id,
            name,
            surname,
            patronymic,
            phone,
            birth_date,
            passport_photo: passportPreviewName,
            visa_photo: visaPreviewName,
            visa_expired_date,
            term_days,
            sum,
            country,
          })
          .then((data) => res(data))
          .catch((error) => rej(new MySqlError(error)));
        await queryRunner.commitTransaction();

        res(data);
      } catch (error) {
        console.log(error);
        await queryRunner.rollbackTransaction();

        rej(new MySqlError(error));
      } finally {
        await queryRunner.release();
      }
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

module.exports = new LoansService();
