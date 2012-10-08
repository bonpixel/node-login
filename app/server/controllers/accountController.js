// ------------- //
// Accounts Page //
// ------------- //

module.exports = function(dependencies) {

  function get(req, res) {
    if (req.session.user === null){
      // if user is not logged-in redirect back to login page //
      res.redirect('/');
    }   else {
      res.render('account', {
        locals: {
          title : 'Control Panel',
          countries : dependencies.CT,
          udata : req.session.user,
          pane_view: 'home'
        }
      });
    }
  }

  function post(req, res) {
    console.log(req);
    res.render('account', {
      locals: {
        title : 'Control Panel',
        countries : dependencies.CT,
        udata : req.session.user,
        pane_view: 'home'
      }
    });
  }

  return {
    get:get,
    post:post
  };

};
