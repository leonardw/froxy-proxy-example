var express = require('express'),
	froxy = require('froxy'),
	http = require('http'),
	routes = require('./routes');

var app = express();
app.set('port', 8000);
app.use(express.favicon());
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);

app.get('/github/*', froxy.proxy({
	host: 'github.com',
	translate: ['/github/', '/leonardw/'],
	debug: true
}));

app.get('/*', froxy.proxy({
	host: 'en.wikipedia.org',
	debug: true
}));

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
