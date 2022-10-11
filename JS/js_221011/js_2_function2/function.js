// 주소 상수
// 변수 : 주소부 , 값부
// 주소를 읽으면 값부가 읽힘 (주소에 접근 할 방법x)

'use strict';

// function test1 (a, b) {
//     console.log(b);
//     console.log(a+b);
//     console.log();
// }

// test1 (5,3);
// test1 (5);

// test1 (7,5,4);

// function test2 (n1, n2) {
//     return n1 + n2; // 명시적 리턴
// }

// console.log(test2(10, 15));
// console.log('-----------------------');

// function test3() {
//     return undefined;
// }
// console.log(test3());
// console.log('-----------------------');

// function test4 () {
//     console.log('passed func');
// }

// function test5 (func) {
//     func();
// }

// test5 (test4); // 콜백 함수

// console.log('-----------------------');

// function test6() {
//     console.log(n) 
// }

// // test6();

// let n = 25;

// test6();
// console.log('------------------------');

// function div(a, b) {
//     if (isNaN(a + b)) {
//         console.log("입력값이 숫자가 아님");
//     } else {
//         console.log(a + "/" + b +"=" +(a / b));
//     }
// }

// div("9"+"4");
// div("a",4);
// console.log('-----------------------');

function accessArguments (n1, n2) {
    for (let i = 0; i < arguments.length ; i++) {
        console.log(arguments[i]);
    }
    console.log();
}

accessArguments(1);
accessArguments(1, 2);
accessArguments(1, 2, 3);
accessArguments(1, 2, 3, 4);
