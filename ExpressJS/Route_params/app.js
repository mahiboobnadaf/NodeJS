const express = require('express');

const app = express();

//Route to
//http://localhost:3000/

app.get('/',function(req,res){
    res.send("This is HomePage");
});


//http://localhost:3000/contact

app.get('/contact',function(req,res){
    res.send("This is Contact Page")
})

//Route Parameters  Parameters can be accessed with req.params.parameter_name
//http://localhost:3000/profile/123

app.get('/profile/:id',function(req,res){
    res.send("You requested for an ID of " +req.params.id)
});

//http://localhost:3000/profile/mahiboob
                                        //when you pass name parameter , the above will be execute ; so comment the above then run the below one
app.get('/profile/:name',function(req,res){
    res.send("You requested for Name of person" + req.params.name)
});

app.listen(3000);