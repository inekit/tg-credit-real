var EntitySchema = require('typeorm').EntitySchema;

module.exports = new EntitySchema({
  name: 'Static',
  tableName: 'statics',
  columns: {
    id: {
      primary: true,
      type: 'int',
      default: 1,
    },
    gitHubLink: {
      type: 'varchar',
      primary: true,
      length: 255,
    },
    linkedInLink: {
      type: 'varchar',
      primary: true,
      length: 255,
    },
    about: {
      type: 'text',
      nullable: true,
    },
  },
});
