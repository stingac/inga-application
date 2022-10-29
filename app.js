const Logger = require('./logger');
const logger = new Logger();
logger.log('message'); 

//Events using EventEmitter
/* 
const EventEmitter = require ('events');
const emitter = new EventEmitter();

emitter.on('messageLogged', function(eventArg) {
    console.log('Listener called', eventArg);
})

emitter.emit('messageLogged',{id: 1, url: 'http://'}); 
*/

