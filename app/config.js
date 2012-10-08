var stylus = require('stylus');
var MStest = require('./server/modules/mysql-stuff');
var nib = require('nib');



//call to the db that returns a color
MStest.db.query('SELECT `color` FROM `settings`', function(err, rows, fields) {
  if (err) throw err;
    console.log('rows: ', rows[0].color);

  color = rows[0].color;
  color = color ? color : 'orange';
  // return color;

  mylib = function(style){
    // style.define('themeColor1', function(){
    //   return new stylus.nodes.Literal(color);
    // });

    style.define('themeColor1', color);

  };
});
    
  

var compile = function(str, path) {
  return stylus(str)
    .use(mylib)
    .use(nib())
    .import('nib');
};



module.exports = function(app, exp) {

  app.configure(function(){
    app.set('views', app.root + '/app/server/views');
    app.set('view engine', 'jade');
    app.set('view options', { doctype : 'html', pretty : true, layout: false });
    app.use(exp.bodyParser());
    app.use(exp.cookieParser());
    app.use(exp.session({ secret: 'super-duper-secret-secret' }));
    app.use(exp.methodOverride());
    app.use(require('stylus')
      .middleware({
        src: app.root + '/app/public',
        compile: compile
      })
    );
    app.use(exp.static(app.root + '/app/server'));
    app.use(exp.static(app.root + '/app/public'));
  });
  
};