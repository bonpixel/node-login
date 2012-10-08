var mysql      = require('mysql');

var dbUser = 'root';
var dbPass = 'root';
var dbHost = global.host;
var dbName = 'bitsmart';


var MS = {}

MS.db = mysql.createConnection({
  host      : dbHost,
  user      : dbUser,
  password  : dbPass,
  database  : dbName
});

module.exports = MS;

MS.db.connect();

MS.query1 = function(){
  
  MS.db.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
    if (err) throw err;
    console.log('The solution is: ', rows[0].solution);
  });
}

MS.query2 = function(){
  MS.db.query('SELECT 1 + 2 AS solution', function(err, rows, fields) {
    if (err) throw err;
    console.log('The solution is: ', rows[0].solution);
  });
}

MS.query3 = function(){
  MS.db.query('SELECT 1 + 3 AS solution', function(err, rows, fields) {
    if (err) throw err;
    console.log('The solution is: ', rows[0].solution);
  });
}

MS.query4 = function(){
  MS.db.query('SELECT * FROM `person`', function(err, rows, fields) {
    if (err) throw err;
    console.log('rows: ', rows);
  });
}

MS.query5 = function(){
  MS.db.query('SELECT * FROM `users`', function(err, rows, fields) {
    if (err) throw err;
    console.log('rows: ', rows);
  });
}

MS.query6 = function(){
  MS.db.query('SELECT * FROM `settings`', function(err, rows, fields) {
    if (err) throw err;
      // console.log('rows: ', rows[0].color);
  });
}