// OS Module 
// methods of OS Module is totalmem() = the memory which is the total memory 

const os = require('os');
var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log('Total Memory: ' + totalMemory);

// We can simplilfy this expression by using a template string which is available in more modern versions of JS 

//Template String 

// ES6 / ES2015 : ECMAScript 6: defines which features are available on JavaScript 
// Each browser implement different features , but v8 that we have in v8 machine have a lot of features 


// with the template string we don't have concatenation 
console.log(`Total Memory: ${totalMemory}`);
console.log(`Total Memory: ${freeMemory}`);

// Using Node our code executing outside of the javascript or as some people say on the server with this we can get information 
// about operating system we can work with files we can work with the network for exmple we can build a web server that listens 
// for HTTP requests on a given port 
