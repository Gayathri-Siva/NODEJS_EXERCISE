var http=require('http');
var url = require('url');

var server=http.createServer(function(req,res){
    var pathname=url.parse(req.url).pathname;
    console.log(pathname);
    
    
    res.writeHead(200,{'content-type':'text/plain'});
    res.end('welcome to nodejs');

     });
server.listen(8080,()=>
{
    console.log('server listening to port 8080');
});
//localhost:8080/pathname
//pathname will be displayed in console
//e.g localhost:8080/reload
//it display /reload