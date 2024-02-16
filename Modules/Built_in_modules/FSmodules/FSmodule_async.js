// ASYNCHRONOUS file system methods

// //creating a directory
const fs = require('fs')

fs.mkdir('./myFolder_async',(err)=>{
    (err) ? console.log(err) : console.log("Succesfully created the folder"); writingFile()
})

//creating and writing a file

function writingFile(){
    
    const input_txt="hello welcome to sathvik softech\n"

    fs.writeFile('./myFolder_async/mytext.js',input_txt,{flag:'a'},(err)=>{       //{fag : 'a'} is OPTIONAL OBJECT which does not overwrite the present text instead it will append at end of file
        (err) ? console.log(err) : console.log("Succesfully created the file and wrote input"); readingFile()
    })
}

function readingFile(){

    fs.readFile('./myFolder_async/mytext.js',{encoding : 'utf-8'},(err,text)=>{
        (err) ? console.log(err) : console.log("Succesfully Encoded the file , Here i the data"); console.log(text)

    })
}
