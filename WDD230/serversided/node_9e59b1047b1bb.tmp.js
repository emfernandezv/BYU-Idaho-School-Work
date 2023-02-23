var http = require('http');

var server = http.createServer(function (req,res) {
    if (req.url == '/'){
        res.writeHead(20, {'Content-Type': 'text/html'});
    
        res.write('<html><body><p>W10 Welcome to the regular homepage</p></body></html>');
        console.log("WE ARE ON THE SERVER");
        res.end();
    }
    else if (req.url == "/student"){
        res.writeHead(20, {'Content-Type': 'text/html'});
        res.write('<html><body><p>W10 this is the student page</p></body></html>');
        res.end();
    }
    else if (req.url == "/admin"){
        res.writeHead(20, {'Content-Type': 'text/html'});
        res.write('<html><body><p>W10 this is the administrator page</p></body></html>');
        res.end();
    }
    else {
        res.end('Invalid Request');
    }
});

server.listen(5000);
console.log('Node.js web server at port 5000 is running...')
  
    


