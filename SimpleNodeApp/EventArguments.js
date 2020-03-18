// EVENT MODULE

//Class: EventEmitter


// first letter is uppercase it indicates that EventEmitter is a class
// A class is a container of properties and functions which we call methods 
// Class is a container for a bunch of related methods and properties 
const EventEmitter = require('events');

// In order to use this EventEmitter we want to create an instance of this class
// Class is human and Object is John
const emitter = new EventEmitter();

// use to raise an event 
// Nothing is going to happen because we raise an event here but nowhere in our application we have registered a listener 
// that is intersted in that event.
// A listener is a function that will be called when that event is raised 

// Register a listener 
// When we raised the event 'messageLogged' then the callback function is executed 
// The order has a role here , if we create the listener after the event nothing will happen 
emitter.on('messageLogged', function(arg){
    console.log('Listener called', arg);
});

// Verified this object as event argument 
emitter.emit('messageLogged', { id: 1, url: 'http://'});

// Making a noise, produce - signaling that an event has happened 
