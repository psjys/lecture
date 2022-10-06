'use strict';

let value;                        // 종속 속성들의 유효성 평가를 위한 변수로 가정.

let obj;                          // 객체로 가정.
let inputValue1 = 'first data';   // 1차 종속 하위 속성 가정.
let inputValue2 = 'second data';  // 2차 종속 하위 속성 가정.

value = obj;

if (obj) {
    value = inputValue1;

    if(inputValue1) {
        value = inputValue2;
    }
}

if (value) {
    console.log(value);
} else {
    console.log(`유효하지 않은 속성이 포함.`);
}
console.log();

/* 단락 평가 성질을 활용한 입력 데이터들에 대한 빠른 유효성 검증. */
value = obj && inputValue1 && inputValue2;

if (value) {
    console.log(value);
} else {
    console.log(`유효하지 않은 속성이 포함.`);
}
console.log();

// /* 유효하지 않은 객체에 대한 속성 접근. */
function getChar1(str) {
    let char = str[2];
    console.log(char);
}
getChar1('data');
// getChar1();  // 객체가 null 또는 undefined인 경우 객체의 체이닝 연산자(.)나 배열 연산자([])를
console.log();  // 통해 객체의 속성 접근 시 TypeError : Cannot read property of null(undefined) 발생.


/* 단락 평가를 통한 유효하지 않은 객체에 대한 속성 접근을 선제 차단. */

function getChar2(str) {
    let char = str && str[2];   // 함수의 인수(str)가 null이나 undefined인 경우, 단락 평가 특성을 활용하여
    console.log(char);          // 유효하지 않은 값(null, undefined)을 먼저 반환시킴으로써 유효하지 않은
}                             // 객체(str)에 대한 속성 접근을 선제 차단.
getChar2('data');
// getChar2();