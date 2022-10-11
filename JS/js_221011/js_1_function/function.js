'use strict';

// 객체에 소속돼있는 함수가 메서드

// 함수 : 복잡하거나 반복되는 로직을 하나의 명령어로 간단히 실행 가능한 프레임.
// 함수 형식 :      function 함수명 ( 매개변수 ) { 함수 실행 블럭 }
//                                     입력             처리
//                  return : 출력

function sum (n1, n2) {
    return n1 + n2;
    // return 안쓰면 반환 안돼서 undefined 출력됨
    // return undefined 가 기본 출력값
}

console.log(sum(5, 8)); // 전달하는 값 : 실인수


//=============================================================

// 누적합
// 함수 쓰면 숫자 바뀌어도 코드 두 번 쓸 필요 없음

// function fromToSum() {
//     let tot = 0;
//     let min, max;

//     min = 1;
//     max = 10;

//     for (let i = min ; i <= max ; i++) {
//         tot += i;
//     }

//     console.log(`${min}부터 ${max}까지 누적합 : ${tot}\n\n`);
// }

// fromToSum();

//==============================================================

// function fromToSum(min, max) { // 매개변수 (지역변수)
//     let tot = 0;
    
//     for (let i = min ; i <= max ; i++) {
//         tot += i;
//     }
    
//     console.log(`${min}부터 ${max}까지 누적합 : ${tot}\n\n`);
// }

// let min, max; //전역변수

// min = 1;
// max = 10;

// fromToSum(1, 10);

//==============================================================

function fromToSum(min, max) { // 매개변수 (지역변수)
    let tot = 0;
    
    for (let i = min ; i <= max ; i++) {
        tot += i;
    }
    return tot;     // 1) 호출부로 우변값을 반환   2) 함수 종료
    console.log (123); // 위에 return을 써서 죽은 코드가 됨
}

let min, max; //전역변수

min = 1;
max = 10;

console.log(`${min}부터 ${max}까지 누적합 : ${fromToSum(min, max)}\n\n`);

