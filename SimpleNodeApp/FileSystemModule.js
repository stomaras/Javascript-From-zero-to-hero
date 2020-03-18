// How to work with files in Node 
// fs module 
const fs = require('fs');

// always use asynchronous methods like access

//const files = fs.readdirSync('./');
//console.log(files);

// Asynchronous function readdir
fs.readdir('./', function(err, files){
    if(err){
        console.log('Error', err);
    }else{
        console.log('Result', files);
    }
});
