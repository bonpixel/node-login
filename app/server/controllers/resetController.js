// ---------------- //
// Reset Controller //
// ---------------- //

module.exports = function(dependencies) {

  function get(req, res) {
    dependencies.AM.delAllRecords( );
    res.redirect('/print');
  }

  return { get:get };
};