// -------------- //
// Reset Password //
// -------------- //

module.exports = function(dependencies) {

  function get(req, res) {
    var email = req.query["e"];
    var passH = req.query["p"];
    dependencies.AM.validateLink(email, passH, function(e){
      if (e != 'ok'){
        res.redirect('/');
      } else {
        // save the user's email in a session instead of sending to the client //
        req.session.reset = { email:email, passHash:passH };
        res.render('reset', { title : 'Reset Password' });
      }
    });
  }

  function post(req, res) {
    var nPass = req.param('pass');
    // retrieve the user's email from the session to lookup their account and reset password //
    var email = req.session.reset.email;
    // destory the session immediately after retrieving the stored email //
    req.session.destroy();
    dependencies.AM.setPassword(email, nPass, function(o){
      if (o){
        res.send('ok', 200);
      } else {
        res.send('unable to update password', 400);
      }
    });
  }

  return { get:get, post:post };
};