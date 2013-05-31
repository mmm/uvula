//require.paths.unshift(__dirname + '/lib');
//require.paths.unshift(__dirname);

var http = require('http');

var server = http.createServer(function (request, response) {

  var url = require('url').parse(request.url);

  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end("Hello from uvula\n");

});
server.listen("8000");

console.log("Server running at http://0.0.0.0:8000\n");
