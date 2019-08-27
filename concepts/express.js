var express=require('express');

var app=express();

app.get('/',function(req,res)
{
    res.send(200,{data:'success'});
})

app.listen(8080,'127.0.0.1',function()
{
    console.log('server listening to port 8080')
});