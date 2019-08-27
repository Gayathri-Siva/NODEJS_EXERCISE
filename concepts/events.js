var http=require('http');
var fs=require('fs');

var event=require('events');

const myEvent=event.EventEmitter();

var server=http.createServer(function(req,res){
    fs.readFile('textfile.txt',function(err,data){
    console.log('file has been read');
    myEvent.emit('read');
     });
    myEvent.on('read', function(data){
    console.log('finished file read and event emit');
     });

    res.writeHead(200,{'content-type':'text/plain'});
    res.end('welcome to nodejs');
 });

server.listen(8080,()=>
{
    console.log('server listening to port 8080');
});




