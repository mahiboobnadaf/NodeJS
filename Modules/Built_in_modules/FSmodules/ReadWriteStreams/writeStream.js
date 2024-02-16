const fs = require('fs');

const myReadStream = fs.createReadStream(__dirname + '/readMe.txt','utf-8');    //by giving encoding the data will read as it is in the readme file 

const myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');         //The path where to write the read contents

myReadStream.on('data',function(chunk){
    console.log("----------------New Chunk recieved:---------------------------");
    // console.log(chunk);
    myWriteStream.write(chunk);

})