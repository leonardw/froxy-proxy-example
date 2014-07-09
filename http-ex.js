var froxy = require('froxy'),
	http = require("http");

http.createServer(froxy.proxy({
	host: 'en.wikipedia.org',
	debug: true
})).listen(8000);

console.log("HTTP proxy server running at http://localhost:8000\nCTRL + C to shutdown");