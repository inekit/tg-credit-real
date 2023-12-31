const tOrmCon = require("../../db/connection");
const checkInputData = require("../utils/checkInputData");
const {
  HttpError,
  MySqlError,
  NotFoundError,
  NoInputDataError,
} = require("../utils/httpErrors");

class UsersService {
  constructor() {
    this.getUsers = this.getUsers.bind(this);
    this.getProfile = this.getProfile.bind(this);
    this.editUser = this.editUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
  }

  getUsers({ id, page, take, searchQuery }) {
    return new Promise((res, rej) => {
      const filteres = {};
      if (id) filteres.toCode = id;
      searchQuery = searchQuery ? `%${searchQuery}%` : null;

      take = take || 10;
      page = page || 1;
      let skip = (page - 1) * take;
      console.log(skip, take);

      tOrmCon.then((connection) => {
        connection
          .query(
            `select *, u.surname||' '|| u.name || ' ' || u.patronymic as fio from users u
             where (id = $1 or $1 is NULL) and 
         (lower(u.name) like lower($2) or lower(u.surname) like lower($2) or lower(u.patronymic) like lower($2) 
         or u.id::varchar like $2 or lower(u.username) like lower($2) or $2 is NULL)
         order by id desc LIMIT $3 OFFSET $4`,
            [id, searchQuery, take, skip]
          )
          .then((data) => res(data))
          .catch((error) => rej(new MySqlError(error)));
      });
    });
  }

  getProfile({ user_id }) {
    return new Promise(async (res, rej) => {
      if (!user_id) return rej(new NoInputDataError({ user_id }));

      const connection = await tOrmCon;
      connection
        .query(
          `select u.*, avg(l.assessment) avg_assessment, 
          count(case when l.status = 'Закрыт' then 1 end) count_closed, 
          count(case when l.status = 'Отменен' then 1 end) count_cancelled, 
          count(case when l.status = 'Запрещен' then 1 end) count_forbidden,
          max(case when (l.status = 'Новый' or l.status = 'Выдан' or l.status = 'Получен' or l.status = 'На возврате') then l.status else null end) active_loan_status,
          count(case when (l.status <> 'Отменен' and l.status <> 'Запрещен') then 1 else null end) count_total
          from users u left join loans l on l.user_id = u.id where u.id = $1 group by u.id `,
          [user_id]
        )
        .then((data) => res(data?.[0]))
        .catch((error) => rej(new MySqlError(error)));
    });
  }

  deleteUser(id) {
    return new Promise((res, rej) => {
      if (!id) return rej(new NoInputDataError({ id: id }));

      const filteres = {};
      if (id) filteres.toCode = id;

      tOrmCon.then((connection) => {
        connection
          .getRepository("User")
          .delete({ id })
          .then((data) => res(data))
          .catch((error) => rej(new MySqlError(error)));
      });
    });
  }

  editUser({ id, ban }, ctx) {
    return new Promise((res, rej) => {
      if (!id) return rej(new NoInputDataError({ id }));

      tOrmCon.then((connection) => {
        connection
          .getRepository("User")
          .update({ id }, { ban })
          .then(async (data) => {
            await ctx.telegram
              .sendMessage(
                id,
                ban
                  ? ctx.getTitle("YOU_ARE_BANNED")
                  : ctx.getTitle("YOU_ARE_UNBANNED")
              )
              .catch(console.log);

            res(data);
          })
          .catch((error) => rej(new MySqlError(error)));
      });
    });
  }
}

module.exports = new UsersService();
