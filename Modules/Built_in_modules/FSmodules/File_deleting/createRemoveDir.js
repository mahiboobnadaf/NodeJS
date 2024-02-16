const fs = require('fs');

//creating folders / dorectories

fs.mkdirSync('Sync_Folder')  //creates a folder Synchronously

fs.mkdir('Async_Folder',()=>{
    console.log("Async folder created")         //creates folder asynchronously so callback function is must here
})       



// Deleting directories

fs.rmdirSync('Sync_Folder');        // Removes folder synchronously


fs.rmdir('Async_Folder',function(){
    console.log("Async folder removed")         //removes folder asynchronously
});

// Creating the directory and copying the contents of readme.txt file to writeme.txt file

fs.mkdir('example',()=>{
    fs.readFile('readME.txt','utf8',function(err,data){
        console.log(data)
        fs.writeFileSync('./example/writeMe.txt',data);
    })

})


//rmdir cannot remove folder if it is not empty
// to do that first we must remove the file from the folder then rmdir can remove folder


//Deleting a file

// fs.unlink('./example/writeMe.txt',()=>{
//     console.log("writeme file removed from example")
// });

// fs.rmdir('example',()=>{
//     console.log("example folder has been deleted")
// })