// Application routes
const userCtrl = require('../controllers').users;

module.exports = (app) => {

  app.get('/', function(req, res, next) {
    res.render('index');
  });

  app.get('/users/signup', userCtrl.signup);
  app.get('/users/signin', userCtrl.signin);
}
