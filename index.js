var http = require('http');
var date = require('./modules/date');
http
    .createServer(function(req, res){
        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });

        res.write("the date is " + date);
        res.end('Hello world');
    })
    .listen(8080);