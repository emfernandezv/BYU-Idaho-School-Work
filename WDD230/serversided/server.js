var http = require('http');

var server = http.createServer(function (req,res) {
    if (req.url == '/'){
        res.writeHead(20, {'Content-Type': 'text/html'});

        res.write('<html><body><p>This is home Page.<script>console.log("IN THE BROWSER")</script</p></body></html>');
        console.log("IN THE SERVER"); 
        res.end();
    }
    else if (req.url == '/student'){
        res.writeHead(20, {'Content-Type': 'text/html'});
        res.write('<html><body><p>This is student Page.</p></body></html>');
    }
    else if (req.url == '/admin'){
        res.writeHead(20, {'Content-Type': 'text/html'});
        res.write('<html><body><p>This is admin Page.</p></body></html>');
    }
})

server.listen(5000);
console.log('Node.js web server at port 5000 is running..')