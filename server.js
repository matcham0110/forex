var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {
    fs.readFile('./index.html', 'utf-8', function(error, content) {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(content);
    });
});

var io = require('socket.io').listen(server);

io.sockets.on('connection', function (socket) {
        socket.emit('message', 'Vous êtes bien connecté !');
});

io.sockets.emit('connection');

server.listen(8081);
