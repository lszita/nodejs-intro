'use strict';

var log = function(msg){ console.log(msg) };

var getMessage = function(cb){
    setTimeout(() => {
        return cb('Hello World');
    },2000);
};

getMessage((result) => {
    log(result);
});