// ---------------------- //
// view & delete accounts //
// ---------------------- //

module.exports = function(dependencies) {

  function post(req, res){
    dependencies.AM.delete(req.body.id, function(e, obj){
      if (!e){
        res.clearCookie('user');
        res.clearCookie('pass');
        req.session.destroy(function(e){ res.send('ok', 200); });
      } else {
        res.send('record not found', 400);
      }
    });
  }

  return { post:post };
}