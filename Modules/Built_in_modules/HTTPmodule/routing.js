//Here we are responding differently to different incoming requests using req.url property

const http = require('http')


const server = http.createServer((req,res)=>{
    if(req.url=='/' || req.url=='/home'){
        res.end("This is Home page")
        
    }
    else if(req.url=='/about'){
        res.end("This is About page")
    }
    else{
        res.end("404 resource Not Found")
    }

}).listen(5000,()=>{
    console.log("Server is running at port 5000")
})  
