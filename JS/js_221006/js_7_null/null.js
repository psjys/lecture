'use strict';

/* 널 병합 연산자의 기본 동작 */
let data1;
let data2 = null;
let data3 = '';
let data4 = 0;
let data5 = NaN;

// console.log(data1 ?? 'value');
// console.log(data2 ?? 'value');
// console.log(data3 ?? 'value');
// console.log(data4 ?? 'value');
// console.log(data5 ?? 'value');
// console.log('-------------');

/* null과 undefined가 아닌 데이터의 검출 */
let input;

console.log(input !== null && input !== undefined ? input : 'value');
console.log('-------------');


/* 널 병합 연산자를 통한 null과 undefined가 아닌 데이터의 검출 */
console.log(input ?? 'value');
console.log('-------------');


/* 널 병합 연산자 적용 시 괄호 없는 and와 or연산자의 나열은 금지 */
// console.log(data1 && data2 ?? 'value');
console.log((data1 && data2) ?? 'value');