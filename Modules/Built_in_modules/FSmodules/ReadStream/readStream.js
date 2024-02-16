const fs = require('fs');

// const myReadStream = fs.createReadStream(__dirname + '/readMe.txt');    //check thi in terminal it will show the buffer data

const myReadStream = fs.createReadStream(__dirname + '/readMe.txt','utf-8');    //by giving encoding the data will show as it is in the readme file 

myReadStream.on('data',function(chunk){
    console.log("----------------------Chunk recieved:---------------------------");
    console.log(chunk);
})