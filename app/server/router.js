// var LoginChecker = require('./modules/accountManager');


// Dependencies
var AM = require('./modules/account-manager');
var CT = require('./modules/country-list');
var MS = require('./modules/mysql-stuff');
var EM = require('./modules/email-dispatcher');
var FB = require('./modules/form-builder');


var Controller = require('./controllers/masterController');

module.exports = function(app) {

  var controller = {};
  
  controller.index          = require('./controllers/indexController')          ( { AM:AM } );
  controller.account        = require('./controllers/accountController')        ( { CT:CT } );
  controller.home           = require('./controllers/homeController')           ( { AM:AM, CT:CT } );
  controller.signup         = require('./controllers/signupController')         ( { AM:AM, CT:CT } );
  controller.lost_password  = require('./controllers/lostPasswordController')   ( { AM:AM, EM:EM } );
  controller.reset_password = require('./controllers/resetPasswordController')  ( { AM:AM } );
  controller.print          = require('./controllers/printController')          ( { AM:AM } );
  controller.delete         = require('./controllers/deleteController')         ( { AM:AM } );
  controller.reset          = require('./controllers/resetController')          ( { AM:AM } );
  controller.fourohfour     = require('./controllers/fourohfourController')     ();


  // app.all('*', checkLoginStatus );

// main login page //
  // app.all('*', AM.requireAuthentication, AM.loadUser);
  app.get ('/', controller.index.get );
  app.post('/', controller.index.post );
  
// logged-in user homepage //
  app.get ('/home', controller.home.get );
  app.post('/home', controller.home.post );
  
// creating new accounts //
  app.get ('/signup', controller.signup.get );
  app.post('/signup', controller.signup.post );

// password reset //
  app.post('/lost-password', controller.lost_password.post );
  app.get ('/reset-password', controller.reset_password.get );
  app.post('/reset-password', controller.reset_password.post );
  
// view & delete accounts //
  // app.get ('/print', controller.print.get );
  app.post('/delete', controller.delete.post );
  app.get ('/reset', controller.reset.get );

// accounts //
  app.get ('/account', controller.account.get );
  app.post('/account', controller.account.post );

// catch all
  app.all('*', controller.fourohfour );

};
