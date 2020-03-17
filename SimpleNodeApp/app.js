// to load a module we use the require function we don't have this on browsers
// ./ -> indicates the current folder.
// ../ -> indicates the parent folder.

// when loading a module using the required function it's better to store the result in a constant 
// The reason for this is because we don't want to accidentally overwrite the value of logger like this ... logger = 1; 
// then if i call the logger.mes('tom brat '); i will take an exception  

// Sometimes instead of exporting an object from a module you may want to export only a single function 
// With this way in our case logger.js:  module.exports = mes;
// in app.js logger is not an object but just a function that we can call directly like this logger('tom brat');

// There are tools like jshint 
const logger = require('./logger');

//console.log(logger);

//logger = 1;

logger.mes('tom brat');
