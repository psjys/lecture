'use strict';

// let tot = 0;
// let n = 1;

// for (let i = 0; i < 20; i++) {
//     n += 2;
//     tot += n;
// }

// console.log(tot);

let tot = 2;
let first = 1 , second = 1;
let current;

for (let i = 0 ; i < 98 ; i++) {
    current = first + second;
    tot += current;
    first = second;
    second = current;
}

console.log(tot);