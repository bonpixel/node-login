
/**
 * BitSmart Manager
 * Author : Bryan Nichols
 * More Info : tagcreativestudio.com
 */

var exp = require('express');
var app = exp.createServer();

app.root = __dirname;
var todays_weather = 'sunny';

global.host = 'localhost';

// Gimme the configz dude!
require('./app/config')(app, exp);

// Gimme the routez dude!
require('./app/server/router')(app);

app.listen(8080, function(){
	console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});