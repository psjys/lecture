'use strict';

let n ;
function test() { }

console.log(typeof 1);
console.log(typeof 5.5);
console.log(typeof "test");
console.log(typeof "");
console.log("------------------");

console.log(typeof true);
console.log(typeof NaN);
console.log(typeof null);
console.log(typeof undefined);
console.log("------------------");

console.log(typeof n);
console.log(typeof test);
console.log("------------------");

console.log(typeof 37 === 'number');
console.log(typeof (37 === 'number'));
console.log(typeof 'number' && 37);
console.log(typeof ('number' && 37));