'use strict';

var myFunc1 = function(){
    setTimeout(() => {
        console.log('myFunc1');
    },2000);
};

var myFunc2 = function(){
    setTimeout(() => {
        console.log('myFunc2');
    },1000);
};

myFunc1();
myFunc2();