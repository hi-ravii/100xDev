const http = require('http');

//http is also a module of node js

 

const server = http.createServer(function(req,res){

    res.end("hello world");

})

 

server.listen(3000);