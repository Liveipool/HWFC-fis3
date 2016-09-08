module.exports = function(app) {
  api = require('../controllers/msg.controller');
  app.get('/msg', api.msgs);
}
