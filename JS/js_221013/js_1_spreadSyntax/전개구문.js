'use strict';

function spreadAr(...a) {
    for (let i = 0; i < a.length; i++) {
        console.log(a[i]);
    }
    console.log('============================');
}

spreadAr(1, 2, 3);
spreadAr(1, 2, 3, 4, 5);
spreadAr('가', 11, '나', 12, '다', 13);

console.log('============================');
console.log('============================');

let ar1 = [1, 2, 3];
let ar2 = [1, 2, 3];

let ar3 = [ar1, ar2]; // 2차원 배열 생성

console.log(ar3);

console.log('============================');
console.log('============================');

let a1 = [1, 2, 3];
let a2 = [1, 2, 3];
let a3 = [...a1, ...a2];


console.log(a3);

a2[2] = 4;          // 배열의 값 자체를 복사하는 것. 값의 참조 자체를 복사하는 것은 아님

console.log(a3);
console.log(a2);

console.log('============================');
console.log('============================');

let [element1, element2] = ['요소1', '요소2'];

console.log(element1);
console.log(element2);

console.log('============================');

/* 
    < 전개구문을 활용한 구조분해 할당 >
*/

let [e1, e2, e3, ...restElement] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(e1);
console.log(e2);
console.log(e3);
console.log(restElement);