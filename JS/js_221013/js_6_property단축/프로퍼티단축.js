'use strict';

let name = '박성연';
let age = 22;

const teacher1 = {
    name: name,
    age: age,
};

console.log(teacher1);
console.log();

const teacher2 = {
    name,           // key와 value가 동일하면 단축 문법 제공
    age,
};

console.log(teacher2);

