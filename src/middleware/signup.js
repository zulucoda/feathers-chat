'use strict';

module.exports = function(app) {
  return function(req, res, next) {
    // Perform actions

    const body = req.body;

    // get the user service and create a new user
    app.service('users').create({
      email: body.email,
      password: body.password
    }).then(user => res.redirect('/login.html'))
    .catch(next)

  };
};
