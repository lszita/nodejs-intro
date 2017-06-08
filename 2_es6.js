'use strict';

var log = (msg) => { console.log(msg); };

var createLogger = (msg) => { 
    return () => log(msg); 
};

var helloLogger = createLogger('Hello World');

helloLogger();