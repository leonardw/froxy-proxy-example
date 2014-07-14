var express = require('express'),
	froxy = require('froxy'),
	http = require('http');

var app = express();
app.set('port', 8000);

app.route('/github/*').get(froxy.proxy({
	host: 'github.com',
	translate: ['/github/', '/leonardw/'],
	debug: true
}));

app.route('/*').get(froxy.proxy({
	host: 'en.wikipedia.org',
	debug: true
}));

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port', app.get('port'));
});
