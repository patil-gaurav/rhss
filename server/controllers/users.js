const User = require('../models').User;

module.exports = {
  signup (req, res) {
    res.render('users/signup', { title: 'Sign Up Form', csrfToken: req.csrfToken() });
  },

  signin (req, res) {
    res.render('users/signin', { title: 'Sign In Form', csrfToken: req.csrfToken() });
  }
}
