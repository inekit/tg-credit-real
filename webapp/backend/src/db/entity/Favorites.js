var EntitySchema = require("typeorm").EntitySchema;

module.exports = new EntitySchema({
  name: "Favorites",
  tableName: "favorites",
  columns: {
    user_id: {
      type: "bigint",
      primary: true,
    },
    item_id: {
      type: "bigint",
      primary: true,
    },
  },
  relations: {
    user: {
      target: "User",
      type: "one-to-many",
      cascade: true,
      joinColumn: true,
      onDelete: "cascade",
      onUpdate: "cascade",
    },
    item: {
      target: "Item",
      type: "one-to-many",
      cascade: true,
      joinColumn: true,
      onDelete: "cascade",
      onUpdate: "cascade",
    },
  },
});
