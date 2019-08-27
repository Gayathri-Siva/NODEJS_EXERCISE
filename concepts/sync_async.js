//SYNCHROUS OPERATIONS

// var fs=require('fs');

// var data=fs.readFileSync('textfile.txt');//first execute this function
// console.log(data.toString());
// console.log('End of file');//finally execute this line

//ASYNCHROUS OPERATIONS

var fs=require('fs');

fs.readFile('textfile.txt',function(err,data)
{
    if(err){ console.log('err happend during read file')}
    setTimeout(()=>{
        console.log(data.toString());
    },1000)
});

console.log('end read file operations');//first execute this function ,no wait for any other function to execute