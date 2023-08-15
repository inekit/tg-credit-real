var EntitySchema = require("typeorm").EntitySchema;

module.exports = new EntitySchema({
  name: "UserFavorite",
  tableName: "users_favorites",
  columns: {
    user_id: {
      type: "bigint",
      primary: true,
    },
    channel_id: {
      type: "bigint",
      primary: true,
    },
  },
  relations: {
    user: {
      target: "User",
      type: "many-to-one",
      joinColumn: true,
      cascade: true,
      onDelete: "cascade",
      onUpdate: "cascade",
    },
    channel: {
      target: "Channel",
      type: "many-to-one",
      joinColumn: true,
      cascade: true,
      onDelete: "cascade",
      onUpdate: "cascade",
    },
  },
});
