// Let's imagine that we are gonna create a module for login messages and we are gonna reuse this module 
// in various part of this application or potentially in other applications 
// we are going to use one of those remote logging services for login our messages so there are websites out there 
// they are provide logging as a service they give us a URL and we can send an HTTP request to that url to log messages to the cloud 

// it may be not a true service out there but imagine we are going to send an HTTP request to this endpoint to this URL 
// We want to make this visible from the outside for example from the app.js 
// One of the properties of module object is exports 

const EventEmitter = require('events');


var url = 'http://mylogger.io/log';// Implementation detail 

// with the extends keyord the Logger class will have all the capabilities of EventEmitter 
class Logger extends EventEmitter {
    mes(message){
        // we don't need the function keyword when we define a function in a class
        // Send an HTTP request
        console.mes(message);
    
        // Raise an event 
        this.emit('messageLogged', {id: 1, url: 'http://'});
    }

}



module.exports = Logger;

