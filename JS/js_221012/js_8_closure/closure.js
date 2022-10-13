'use strict';

/* 
    < 클로저(Closure) >

-   도달 가능한 외부변수에 접근이 가능한 함수.
    일반적으로 중첩함수에서 내부 함수가 외부함수의 변수를 참조 가능한 상태를 의미.
    js 에서는 모든 함수가 클로저로 활용 가능.
*/

let outer1 = 5;         // 전역변수는 전역 렉시컬환경객체(Global Lexcial Environment)의 프로퍼티.

function closure1() {   // 함수를 기준으로 함수 내의 매개변수나 지역변수를 저장하는 내부 렉시컬환경객체와
    //                  // 함수 외부의 변수를 참조하는 경우의 외부 렉시컬환경객체로 구분.
    //                  // 동작 방식은 먼저 내부 렉시컬환경객체에서 변수를 검색후 존재하지 않으면 외부
    //                  // 렉시컬환경객체에서 검색하는 구조.
    //                  // 따라서 지역변수와 전역변수명이 동일한 경우 지역변수가 참조되는 상황은 이러한
    //                  // 연유.
    console.log(outer1);
}

closure1();
console.log('================================');

// =====================================================================================
// 중첩함수 내에서의 외부변수 참조

function outerFunc1() {
    let outer2 = 10;

    function innerFunc() {      // 내부 함수인 innerFunc 에 대한 내부 렉시컬환경객체와 외부 함수인
        //                      // outerFunc1 에 대한 외부 렉시컬환경객체로 구분.
        console.log(outer2);
    }

    innerFunc();
}

outerFunc1();
console.log('================================');

// =====================================================================================

/* 
    함수 내의 지역변수는 호출이 완료되면 소멸되지만, 도달 가능한 상태일 때까지는 그 값을 유지.
    즉, 함수의 호출이 끝나면 해당 함수에 대한 렉시컬환경객체가 소멸되지만, 내부함수가 외부함수의
    렉시컬환경객체(외부변수)를 참조하는 상태에서 반환된 내부함수의 참조를 유지하고 있는 동안은
    해당 외부 렉시컬환경객체는 메모리에서 제거되지 않고 유지되는 특성.
*/
function outerFunc2() {
    let outer3 = 15;        // outerFunc2 의 지역변수(outer3)는 호출이 완료되면 그 기억공간이
    //                      // 소멸되지만 내부함수에서 그 값을 참조하여 익명함수로 반환함으로써
    //                      // 그 참조를 통해 외부변수(outer3)에 도달 가능함으로서 outerFunc2
    //                      // 함수를 호출하여 반환받는 시점까지도 외부변수(outer3) 기억공간은
    //                      // 유지.

    return function () {
        console.log(outer3);
    };
}

outerFunc2()();
console.log('================================');

// =====================================================================================

function outerFunc3() {
    let outer4 = 20;

    return function () {
        return ++outer4;
    };
}

let innerFunc1 = outerFunc3();

console.log(innerFunc1());
console.log(innerFunc1());
console.log(innerFunc1());   // outerFunc3 함수의 호출이 완료되었지만, 내부함수를 통해
//                           // 외부지역변수(outer4)에 도달 가능한 상태가 유지되므로
//                           // 외부지역변수 outer4 는 소멸되지 않고 메모리 유지.
console.log('================================');

innerFunc1 = null;           // innerFunc1 이 내부함수의 참조를 잃어버림으로써 기존의
//                           // 렉시컬환경 객체가 소멸됨에따라 지역변수 또한 소멸.

innerFunc1 = outerFunc3();   // 새로운 렉시컬환경 객체 생성

console.log(innerFunc1());
console.log('================================');

// =====================================================================================

function outerFunc4() {
    let outer5 = 25;

    return function () {
        return ++outer5;
    };
}

/* 
    두 개의 독립적 렉시컬 환경 객체 생성.
*/
let innerFunc2 = outerFunc4(),
    innerFunc3 = outerFunc4();

console.log(innerFunc2());
console.log(innerFunc3());  // 내부함수가 각각 개별적인 지역변수에 접근되는 것을 확인 가능.