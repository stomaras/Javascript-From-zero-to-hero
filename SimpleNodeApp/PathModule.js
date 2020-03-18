// Build a Restful API using Node,Express and MongoDB all of that recorded with the latest version of Node and modern JavaScript 
// Real world project : A Restful - API for video rental application
// Topics that is must to understand is : working with Node Package Manager (NPM)
//                                        Asynchronous JavaScript including callbacks, promises, async / await
//                                        Implementing CRUD Operations 
//                                        Data Validation 
//                                        Authentication and Authorization using json, web tokens 
//                                        Handling and logging errors
//                                        Unit and Integration Testing 
//                                        Test Driven Development 
//                                        Deployment 

// Path Module
const path = require('path');//This is an object with a bunch of useful methods 

var pathObj = path.parse(__filename);//__filename is one of the arguments and the module wrapper function that we saw before 

console.log(pathObj);
