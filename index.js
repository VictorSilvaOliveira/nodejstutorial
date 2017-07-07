var events = require('events');
var eventEmitter = new events.EventEmitter();

var customEventHandler = function(){
    console.log('I hear a scream!!!');
};

eventEmitter.on('scream', customEventHandler);

eventEmitter.emit('scream');