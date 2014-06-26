exports.index = function(req, res){
	res.writeHead(200);
	res.end('<html><head><title>Hello</title></head><body><h1>Hello</h1><p>Hello World</p>></body></html>');
};