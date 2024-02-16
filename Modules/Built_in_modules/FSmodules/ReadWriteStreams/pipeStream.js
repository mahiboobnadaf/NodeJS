//Pipe will read data from a file and copies data to a writable stream 
// it doeas the same this which the writeStream.js program doeas directly

const fs = require('fs');

const myReadStream = fs.createReadStream(__dirname + '/readMe.txt','utf-8');    //by giving encoding the data will read as it is in the readme file 

const myWriteStream = fs.createWriteStream(__dirname + '/writeMe2.txt');         //The path where to write the read contents

myReadStream.pipe(myWriteStream);