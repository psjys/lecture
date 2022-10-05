/*
    < 문제 >

- 아래와 같이 value1, value2 변수가 선언되어 있을 때 변수의 초기화 여부를 확인하여 초기화
    되지 않은 변수에 대하여 'initialize'라는 문자열로 초기화가 되도록 프로그램 구현.
    단, 두 변수 모두가 이미 초기화되어 있는 경우에는 '모든 변수에 초기화가 이미 되어있습니다.'
    라는 문구를 함께 출력하여 확인 가능하도로 구현.


    < 출력예시 >

(1) let value1 = null;
    let value2;


value1 = null, value2 = initialize

--------------------------------------------------------------------------------------------

(2) let value1 = null;
    let value2 = 1234;


모든 변수에 초기화가 이미 되어있습니다.
value1 = null, value2 = 1234

--------------------------------------------------------------------------------------------

(3) let value1;
    let value2 = 1234;


value1 = initialize, value2 = 1234

--------------------------------------------------------------------------------------------

(4) let value1;
    let value2;


value1 = initialize, value2 = initialize

*/

'use strict';

let value1 = 0;
let value2 = 'a';
let value1Comp = value1 === undefined;
let value2Comp = value2 === undefined;


if(value1Comp || value2Comp) {
    if(value1Comp) {
        value1 = 'initialize';
    } 
    if (value2Comp) {
        value2 = 'initialize'
    }
} else {
    console.log(`모든 변수에 초기화가 이미 되어있습니다.`);
}

console.log(`value1 = ${value1}, value2 = ${value2}`);



// if (isNaN(value1 + value2)) {
//     value1 === undefined ? value1 = 'initialize' : '';
//     value2 === undefined ? value2 = 'initialize' : '';
// } else {
//     console.log(`모든 변수에 초기화가 이미 되어있습니다`);
// }

// console.log(`value1 = ${value1}, value2 = ${value2}`);