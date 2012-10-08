// -------------- //
// password reset //
// -------------- //
//  app.post('/lost-password', );

module.exports = function(dependencies){

  function post(req, res) {
    // look up the user's account via their email //
    dependencies.AM.getEmail(req.param('email'), function(o){
      if (o){
        res.send('ok', 200);
        dependencies.EM.dispatchResetPasswordLink(o, function(e, m){
        // this callback takes a moment to return //
        // should add an ajax loader to give user feedback //
          if (!e) {
          //  res.send('ok', 200);
          } else {
            res.send('email-server-error', 400);
            for (k in e) console.log('error : ', k, e[k]);
          }
        });
      } else {
        res.send('email-not-found', 400);
      }
    });
  };

  return { post:post };
};