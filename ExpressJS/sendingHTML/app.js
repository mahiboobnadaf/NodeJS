const express = require('express');

const app = express();

//Route to
//http://localhost:3000/

app.get('/mypage',function(req,res){
    res.sendFile(__dirname + '/index.html');
});


//http://localhost:3000/contact

app.get('/contact',function(req,res){
    res.send("This is Contact Page")
})


app.listen(3000);