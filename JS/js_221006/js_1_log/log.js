/*
    원시값 중 빈 문자열('')과 false만 추상 동등 비교(==) 시 0으로 변환되어 평가.
*/
console.log('aa' == 0);         // false
console.log('' == 0);           // true
console.log(NaN == 0);          // false
console.log(null == 0);         // false
console.log(undefined == 0);    // false
console.log(true == 1);         // true       // true는 1로 평가.
console.log(false == 0);        // true       // false는 0으로 평가.
console.log('-------------');


/* NaN은 다른 모든 값과 비교했을 때 같지 않으며, 다른 NaN과도 같지 않음에 주의. */
console.log(NaN == NaN);         // false
console.log(NaN === NaN);        // false
console.log(NaN != NaN);         // true
console.log(NaN !== NaN);        // true
console.log('-------------');


console.log(null == null);               // true
console.log(null === null);              // true
console.log(undefined == undefined);     // true
console.log(undefined === undefined);    // true
console.log(true == true);               // true
console.log(true === true);              // true
console.log(false == false);             // true
console.log(false === false);            // true