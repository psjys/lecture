'use strict';

const student = [
    '홍길동',
    '박성연',
    '강감찬',
    '간디',
    '박명수',
];

/*
    Array.filter(predicate: (value: T, index: number, array: T[]) => value is T, thisArg?: any): T[]

-   배열을 순차적으로 순회하면서 콜백함수(predicate)를 호출하되/, 콜백함수가 true 가 되는 모든 배열
    요소를 새로운 배열 형태로 반환하지만 콜백함수의 반환값이 모두 false 가 되면 빈 배열[]을 반환.
    따라서 filter 메서드는 배열의 원본 내에서 특정 조건에 맞추어 새로운 배열을 추출하는 역할.
*/
console.log(student.filter(() => 1));
console.log();
console.log(student.filter((v, i) => i % 2 === 0));
console.log('-------------------');

