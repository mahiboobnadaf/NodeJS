 // SYNCHRONOUS file system methods


const fs = require('fs')

try{

    // fs.mkdirSync('./myFolder_sync')

//Creating and Writing into file

    const data = "Hello !! Welcome to Sathvik Softech \n"
    fs.writeFileSync('./myFolder_sync/mytext.txt',data,{flag:'a'})
    console.log("Successfully created TEXT file")

//Reading the file

    const fileData = fs.readFileSync('./myFolder_sync/mytext.txt','utf-8')
    console.log(fileData)   

}
catch(err){
    console.log("Error Occured")
    console.log(err)
}