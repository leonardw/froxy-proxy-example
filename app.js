var express = require('express'),
	froxy = require('froxy'),
	http = require('http'),
	path = require('path'),
	routes = require('./routes');

var app = express();

// all environments
app.set('port', process.env.PORT || 8000);
app.use(express.favicon());
//app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
//app.use(express.static(path.join(__dirname, 'public')));

//app.get('/', routes.index);
app.get('/*', froxy.proxy({
	host: 'www.dailymail.co.uk',
//	port: 80,
//	protocol: 'http',
//	translate: ['/dm/', '/'],
	translate: [/^\/dm\/(.*)$/, '/$1'],
	debug: true
}));

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
