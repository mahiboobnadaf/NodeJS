const http = require('http');

const fs = require('fs');

const server=http.createServer(function(req,res){
    console.log('request made :' + req.url)
    res.writeHead(200,{'Content-Type':'text/plain'});

    const myReadStream= fs.createReadStream(__dirname + '/readMe.txt');
    myReadStream.pipe(res);
})

server.listen(3000);
console.log("Listenning on port 3000")