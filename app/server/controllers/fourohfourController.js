// --------------- //
// Catch All - 404 //
// --------------- //

module.exports = function(dependencies) {

  function fourohfour(req, res) {
    res.render(
      '404',
      { title: 'Page Not Found'}
    );
  }

  return fourohfour;

};