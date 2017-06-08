'use strict';

var log = function(msg){ console.log(msg) };

var getMessage = function(){
    setTimeout(() => {
        return 'Hello World';
    },2000);
};

var msg = getMessage();
log(msg);