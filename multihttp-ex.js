var froxy = require('froxy'),
	http = require("http");

var wikipediaProxy = froxy.proxy({
	host: 'en.wikipedia.org',
	debug: true
});

http.createServer(wikipediaProxy).listen(8000);
http.createServer(wikipediaProxy).listen(8001);

console.log("Multiple HTTP proxy servers running at\nhttp://localhost:8000\nhttp://localhost:8001\nCTRL + C to shutdown");