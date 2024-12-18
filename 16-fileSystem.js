const fs =require('fs');

//basically we have put all the functionallity of the file system module into the constant fs

// and now we can perform all the file system related function using fs const

 

// to read about different build in fucntion of node do to node site -> docs -> file system -> callback API

//then all the details how to import as above and all the methods related to it along with their syntax

 

//writeFile - this is a buildin func of file system (FS) module which help to create a file and write in it

// inside callback API use can check the syntax

fs.writeFile("hey.txt","HEllo",function(err){

    if(err) console.error(err);

    else console.log("done");

})