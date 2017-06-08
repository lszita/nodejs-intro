'use strict';

var log = function(msg){
    console.log(msg);
};

var createLogger = function(msg){
    return function(){ log(msg); };
};

var helloLogger = createLogger('Hello World');

helloLogger();
// log(typeof helloLogger);