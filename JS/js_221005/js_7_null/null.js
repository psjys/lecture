'use strict';

// console.log(null == undefined);
// console.log(null === undefined);

// console.log(null + 1);
// console.log(undefined + 1);

// console.log(null * 1);
// console.log(undefined * 1);
// console.log('-------------');


const i1 = 5;
const i2 = undefined;
const i3 = null;
let i4;

console.log(i1 == null);
console.log(i2 == null);
console.log(i3 == null);
console.log(i4 == null);
console.log();
console.log(i1 == undefined);
console.log(i2 == undefined);
console.log(i3 == undefined);     // 이퀄연산은 null, undefined 또는 초기화되지 
console.log(i4 == undefined);     // 않은 빈 값에 대하여 모두 동일한 값으로 평가.
console.log();
console.log(i1 === null);
console.log(i2 === null);
console.log(i3 === null);         // 엄격 이퀄연산에서 null에 대한 평가는 오로지 null인지 아닌지로만 평가.
console.log(i4 === null);
console.log();
console.log(i1 === undefined);
console.log(i2 === undefined);
console.log(i3 === undefined);    // 엄격 이퀄연산에서 undefined에 대한 평가는 undefined뿐만 아니라,
console.log(i4 === undefined);    // 초기화되지 않은 비어있는 값에 대해서도 undefined로 평가.

