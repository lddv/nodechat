var http = require('http');

var server = http.createServer(function(request, response){});
server.listen(8080, function(){
	console.log((new Date()) + ' Server is listening on port 8080');
});

var WebSocketServer = require('websocket').server;
var wsServer = new WebSocketServer({ httpServer: server });

var count = 0;
var clients = {};

wsServer.on('request', function(r){
	var connection = r.accept('echo-protocol', r.origin);

	// Specific id for this client & increment count
	var id = count++;
	// Store the connection method so we can loop through & contact all clients
	clients[id] = connection;

	console.log((new Date()) + ' Connection accepted [' + id + ']');
});

