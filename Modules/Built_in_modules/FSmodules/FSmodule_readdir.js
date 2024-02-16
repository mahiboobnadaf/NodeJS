const fs = require('fs')

//Synchronous readdir

const file_sync=fs.readdirSync('./')
console.log(file_sync)

//Asynchronous

fs.readdir('./',(err,files)=>{
    (err) ? console.log(err): console.log(files)
})



//fs.rename will rename the directory name or file name 

fs.rename('./Renaming_files/new_Dummy_file.txt', './Renaming_files/old_Dummy_file.txt',(err)=>{
    (err) ? console.log(err) : console.log("File has been renamed Successfully")
})



//fs.unlink will delete the file from given path

//Asynchronous way

fs.unlink('./waste_file.txt',(err)=>{
    (err) ? console.log(err) : console.log("waste_file has been deleted Asynchronously")
})

// Synchronous way
try{
    fs.unlinkSync('./waste_file2.txt')
    console.log("waste_File 2 has been deleted")
}
catch(err){
    console.log(err)
}

