const cron = require('node-cron');
const updateRss = require('../utils/updateRss');

class Cron {
  constructor() {
    cron.schedule('* * * * *', () => {
      updateRss();
    });
  }
}

module.exports = Cron;
