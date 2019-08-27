var http=require('http');

var server=http.createServer(function(req,res)
{
    res.writeHead(200,{'content-type':'text/plain'});
    res.end('welcome to nodejs');
});

server.listen(8080,()=>
{
    console.log('server listening to port 8080');
});