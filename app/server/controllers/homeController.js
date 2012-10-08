// ------------------ //
// Account Controller //
// ------------------ //

module.exports = function(dependencies){

  function get(req, res) {
    if (req.session.user === null){
      // if user is not logged-in redirect back to login page //
      res.redirect('/');
    } else {
      res.render(
        'home',
        { locals: {
          title : 'Control Panel',
          countries : dependencies.CT,
          udata : req.session.user,
          pane_view: 'home'
        }
      });
    }
  }

  function post(req, res){
    if (req.param('user') !== undefined) {
      dependencies.AM.update({
        user    : req.param('user'),
        name    : req.param('name'),
        email   : req.param('email'),
        country : req.param('country'),
        pass    : req.param('pass')
      }, function(o){
        if (o){
          req.session.user = o;
          // update the user's login cookies if they exists //
          if (req.cookies.user !== undefined && req.cookies.pass !== undefined){
            res.cookie('user', o.user, { maxAge: 900000 });
            res.cookie('pass', o.pass, { maxAge: 900000 });
          }
          res.send('ok', 200);
        } else {
          res.send('error-updating-account', 400);
        }
      });
    } else if (req.param('logout') == 'true'){
      res.clearCookie('user');
      res.clearCookie('pass');
      req.session.destroy(function(e){ res.send('ok', 200); });
    } else if (req.param.match('/^query/')){

    }
  }

  return { get:get, post:post };
};
