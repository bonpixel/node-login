// ----- //
// Print //
// ----- //

module.exports = function(dependencies) {

  function get(req, res) {
    dependencies.AM.getAllRecords( function(e, accounts){
      res.render(
        'print',
        { locals: {
          title : 'Account List',
          accts : accounts,
          pane_view : 'home' }
        });
    });
  }

  return { get:get };
};