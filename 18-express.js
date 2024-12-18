//express js ek npm package & framework

//it gives a flow of rules & regulation that we must follow at time of using it

//manage everything from recieving the request to responding back to the user from the server

 

 

//route is the part of url after the main domain

const express = require('express');// aquiring all the fucntionality of express module from npm into express condt

const app = express();//puting fucntion express into app and the we will use app with its inherited prop to make our app

 

app.get("/",function(req , res ){ // .get is basically a function which take route in " " & input output function

    res.send("homepage");

})

 

app.get("/profile", function (req, res){

    res.send("profilePage");

})

 

app.listen(3000);

 

//