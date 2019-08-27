console.log(__dirname);
console.log(__filename);


setTimeout(()=>
{
    console.log('settimeout one--5s');
},5000);

setTimeout(()=>
{
    console.log('settimeout two--2s');
},2000);


setInterval(()=>
{
    console.log('setinterval one--5s');
},6000);