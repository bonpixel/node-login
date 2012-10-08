// ---------------- //
// Index Controller //
// ---------------- //

module.exports = function(dependencies) {

  function get(req, res){
    // check if the user's credentials are saved in a cookie //
    if (req.cookies.user === undefined || req.cookies.pass === undefined){
      res.render(
        'login',
        { locals: {
          title: 'Hello - Please Login To Your Account',
          pane_view: 'home'
        }
      });

    } else {
      // attempt automatic login //
      dependencies.AM.autoLogin(req.cookies.user, req.cookies.pass, function(o){
        if (o !== null){
          req.session.user = o;
          res.redirect('/home');
        } else {
          res.render(
            'login',
            { locals: {
              title: 'Hello - Please Login To Your Account',
              pane_view: 'home'
            }
          });
        }
      });
    }
  }

  function post(req, res) {
    dependencies.AM.manualLogin(req.param('user'), req.param('pass'), function(e, o){
      if (!o){
        res.send(e, 400);
      } else {
        req.session.user = o;
        if (req.param('remember-me') == 'true'){
          res.cookie('user', o.user, { maxAge: 900000 });
          res.cookie('pass', o.pass, { maxAge: 900000 });
        }
        res.send(o, 200);
      }
    });
  }

  return { get:get, post:post };

};
