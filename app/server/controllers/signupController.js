// --------------------- //
// creating new accounts //
// --------------------- //

module.exports = function(dependencies){

  function get(req, res) {
    res.render('signup', {  locals: { title: 'Signup', countries : dependencies.CT } });
  }

  function post(req, res) {
    dependencies.AM.signup({
      name    : req.param('name'),
      email   : req.param('email'),
      user    : req.param('user'),
      pass    : req.param('pass'),
      country : req.param('country')
    }, function(e, o){
      if (e){
        res.send(e, 400);
      } else {
        res.send('ok', 200);
      }
    });
  }

  return { get:get, post:post };
};