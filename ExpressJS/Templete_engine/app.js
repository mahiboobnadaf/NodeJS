// first install ejs with npm install ejs
// Create a Views folder within that create a file which you want to render and that should be .ejs 
// ex: html cintents can be copied in ejs file
// the render method will defaulty search for views folder and the file which is given as first parameter to render()
// the second param of render() is an object in which we store the name passed in url and that object can be used in ejs file to modify

const express = require('express');

const app = express();

app.set('view engine','ejs');

app.get('/profile/:name',function(req,res){

    var data = {age:23 ,job: "Software Developer"}

    res.render('profile',{person:req.params.name, data : data}); 
});

app.listen(3000);