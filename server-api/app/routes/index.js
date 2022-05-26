let api = require('../api');

module.exports = function (app) {
  app.route('/data').get(api.data);
};
