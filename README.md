# froxy-proxy-example

Sample Node/Express project demonstrating use of the 'froxy' npm module to easily implement
a multi-origin proxy server.
Some URLs are proxied to external hosts, while others are handled locally by the server.

## Usage

```sh
$ git clone https://github.com/leonardw/froxy-proxy-example.git
$ cd froxy-proxy-example
```

## Demo

### Single HTTP proxy server

Start the single-proxy demo by running the following
```sh
$ node http-ex.js 
HTTP proxy server running at http://localhost:8000
CTRL + C to shutdown
```

In a web browser, visit URL [http://localhost:8000](http://localhost:8000)

and observe the following debug information in console
```
Request: { host: 'localhost',
  port: 8000,
  protocol: 'http',
  secure: false,
  url: '/' }
URL    : /
Origin : http://en.wikipedia.org/
```

Visit URL [http://localhost:8000/wiki/Proxy_server](http://localhost:8000/wiki/Proxy_server)

and observe the following debug information in console
```
Request: { host: 'localhost',
  port: 8000,
  protocol: 'http',
  secure: false,
  url: '/wiki/Proxy_server' }
URL    : /wiki/Proxy_server
Origin : http://en.wikipedia.org/wiki/Proxy_server
```


### Multiple HTTP servers sharing the same proxy

Start the multi-proxy demo by running the following
```sh
$ node multihttp-ex.js 
Multiple HTTP proxy servers running at
http://localhost:8000
http://localhost:8001
CTRL + C to shutdown
```

In a web browser, visit both URLs

[http://localhost:8000/wiki/Proxy_server](http://localhost:8000/wiki/Proxy_server)

[http://localhost:8001/wiki/Proxy_server](http://localhost:8001/wiki/Proxy_server)


### Express (v4) application with multi-origin proxying

Start the [Express](http://expressjs.com)-powered proxy demo by running the following
```sh
$ node express-ex.js 
Express server listening on port 8000
```

In a web browser, visit the following URLs

[http://localhost:8000](http://localhost:8000)

[http://localhost:8000/wiki/Proxy_server](http://localhost:8000/wiki/Proxy_server)

[http://localhost:8000/github/froxy](http://localhost:8000/github/froxy)


##License

(The MIT License)

Copyright (c) 2014 Leonard Wu <leonard.wu92@alumni.imperial.ac.uk>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
