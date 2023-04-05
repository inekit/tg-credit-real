var EntitySchema = require('typeorm').EntitySchema;

module.exports = new EntitySchema({
  name: 'Comment',
  tableName: 'comments',
  columns: {
    id: {
      primary: true,
      type: 'int',
      generated: true,
      nullable: false,
    },
    nick: {
      type: 'varchar',
      length: 100,
      nullable: false,
    },
    email: {
      type: 'varchar',
      length: 255,
      nullable: false,
    },
    confirmed: {
      type: 'boolean',
      default: true,
      nullable: false,
    },
    text: {
      type: 'text',
      nullable: false,
    },
    publication_date: {
      createDate: true,
    },
    post_id: {
      nullable: false,
    },
  },
  relations: {
    post: {
      target: 'Post',
      type: 'many-to-one',
      joinColumn: true,
      cascade: true,
    },
  },
});
