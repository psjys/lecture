'use strict';

// function test1 (n1, n2, n3 = 5) {
//     return n1 + n2 + n3;
// }

// console.log(test1(1,2,3));
// console.log(test1(1,2));
// console.log();

// function test2 (str1, str2, str3 = str1 + str2) {
//     return str1 + str2 + str3;
// }

// console.log(test2 ('Welcome ','to house ', 'PSY'));
// console.log(test2 ('Welcome ','to house '));
// console.log();

// function concateString (...str) {
//     let strCombine = '';
//     for (let i =0 ; i < str.length ; i++) {
//         strCombine += str[i];
//     }
//     return strCombine;
// }
// console.log(concateString('I ', 'am ', 'a boy!!'));
// console.log();


function concateData(...data) {
    let dataCombine = '';
    for (let i = 0; i < data.length; i++) {
        dataCombine += data[i];
    }
    return dataCombine;
}
console.log(concateData('age :', 25));
console.log();

function printName(name) {
    function print() {
        console.log(str + name);
    }
    let str = '이름 :';
    print();
}
printName('박성연');
// print('박성연');

