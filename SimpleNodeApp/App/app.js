// Event is basic a signal that indicates that something has happened in our application 
// For example in Node we have a class called HTTP that we can use to build a web server 
// so we listen on a given port and every time we receive a request on that port that HTTP class raises an event
// our job is to respond to that event which basically involves reading that request and returning the right response 
// Several classes in node raises different kinds of events and in your code you might be intersested to respond to that events 


// EVENT MODULE

//Class: EventEmitter


// first letter is uppercase it indicates that EventEmitter is a class
// A class is a container of properties and functions which we call methods 
// Class is a container for a bunch of related methods and properties 
const EventEmitter = require('events');

// In order to use this EventEmitter we want to create an instance of this class
// Class is human and Object is John

// use to raise an event 
// Nothing is going to happen because we raise an event here but nowhere in our application we have registered a listener 
// that is intersted in that event.
// A listener is a function that will be called when that event is raised 

// Register a listener 
// When we raised the event 'messageLogged' then the callback function is executed 
// The order has a role here , if we create the listener after the event nothing will happen 


const Logger = require('./logger');
const logger = new Logger();

// Register a listener
emitter.on('messageLogged', (arg) => {
    console.log('Listener called', arg);
});

logger.mes('message');
