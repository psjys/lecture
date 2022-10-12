/*
    < 화살표 함수(Arrow function) >

- 함수 표현식에 대한 축약 형태로 자바의 람다식과 표현식 규칙이 동일하되 자바의 '->'
  가 아닌 '=>'를 사용하는 차이점.
  또한, 자바의 경우 람다식을 참조하기 위한 함수형 인터페이스가 필요한 반면 js에서는
  동적 타입 결정으로 인해  별도의 함수형 인터페이스에 정의된 추상 메서드 리턴타입과
  형식인수 정의등이 필요치 않아 표현식에 대한 let, const, vat등의 구문 변수로 바로
  참조 가능.

형식    :   참조변수 = (인수1,인수2,...) => { 실행 블럭 };

*/

'use strict';

let add = function (n1, n2) {
    return n1 + n2;
}
console.log(add(6, 9));

add = (n1, n2) => n1 + n2;      // 형식인수가 없거나 2개 이상인 경우 소괄호() 생략 불가. 실행문이
console.log(add(7, 5));         // 하나인 경우 중괄호{} 생략 가능 및 묵시적 자동 return.
console.log();


let outputTest = function () {
    console.log('출력 테스트');
}
outputTest();

outputTest = () => console.log('화살표 테스트');    // 형식인수가 없는 경우 소괄호() 생략 불가.
outputTest();
console.log();


let repeatChar = function (char) {
    for (let i = 0; i < 5; i++) {
        console.log(char);
    }
};
repeatChar('string');

repeatChar = char => {            // 형식인수가 하나인 경우만 소괄호 생략 가능.
    for (let i = 0; i < 5; i++) {   // 실행문이 2개 이상인 경우 중괄호{} 생략 불가 및 반환값
        console.log(char);            // 존재시 명시적 return 반드시 명시.
    }                               // for나 if등의 제어문은 실행문이 하나인 경우 한 줄로 표현이
};                                // 가능하지만, 람다식 적용 시에는 람다식의 구문 블럭{} 생략 불가.
repeatChar('문자열');
console.log();


function printOdd() {
    console.log('홀수');
}
function printEven() {
    console.log('짝수');
}
let identifyOddEven = function (num, odd, even) {
    (num % 2 == 1) ? odd() : even();
};
identifyOddEven(7, printOdd, printEven);
identifyOddEven(18, printOdd, printEven);
console.log();


identifyOddEven = (num, odd, even) => {
    (num % 2 == 1) ? odd() : even();
}
identifyOddEven(
    7,
    () => console.log('홀수'),
    () => console.log('짝수')
);
identifyOddEven(
    18,
    () => console.log('홀수'),
    () => console.log('짝수')
);