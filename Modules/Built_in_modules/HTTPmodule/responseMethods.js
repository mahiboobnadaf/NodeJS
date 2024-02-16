// res.writeHead() is response header, 
// res.write() is response body,
// res.end() closing response process

const http = require('http')
const fs = require('fs')

const aboutPage = fs.readFileSync('./memory_game/index.html')
const aboutStyle = fs.readFileSync('./memory_game/frame_style.css')
const aboutScript = fs.readFileSync('./memory_game/game_script.js')

const server = http.createServer((req,res)=>{

    const url = req.url
    console.log(url)
    
    if(req.url == '/' || req.url == '/home'){
        res.writeHead(200, {'content-type' : 'text/html'})

        res.write('<h1> Home Page </h1>')

        res.end()
    }
    else if(req.url == '/about'){
        res.writeHead(200,{'content-type' : 'text/html'})

        res.write(aboutPage)

        res.end()
    }
    else if(req.url == '/frame_style.css'){
        res.writeHead(200,{'content-type':'text/css'})
        
        res.write(aboutStyle)

        res.end()
    }
    else if(req.url == '/game_script.js'){
        res.writeHead(200,{'content-type':'text/javascript'})
        
        res.write(aboutScript)

        res.end()

    }
    else{
        res.writeHead(404,{'content-type' : 'text/html'})

<<<<<<< HEAD
        res.write("<h1> 404, Resource Not Found <a href='/'> Go Home </a> </h1>")
=======
        res.write("<h1> 404, Resource Not Found </h1>")
>>>>>>> db9bb2d (Node modules)
        
        res.end()
    }
}).listen(5000,()=>{
    console.log("Server is running at port : 5000")
})