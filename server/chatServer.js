var http = require('http');

var server = http.createServer(function(request, response){});
server.listen(8080, function(){
	console.log((new Date()) + ' Server is listening on port 8080');
});

var WebSocketServer = require('websocket').server;
var wsServer = new WebSocketServer({ httpServer: server });
