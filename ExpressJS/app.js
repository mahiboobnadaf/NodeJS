const express = require('express');

const app = express();

app.get('/',function(req,res){
    res.send("This is HomePage");
});

app.get('/contact',function(req,res){
    res.send("This is Contact Page")
})

app.listen(3000);