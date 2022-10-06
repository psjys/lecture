// console.log(1 && 1 || 1 && 0);      //  (1 && 1) || (1 && 0)와 동일.
// console.log("----------------------")


// 0 && console.log('first false 1');          // 선행 피연산자가 false이므로 평가 중단.
// 1 && console.log('first false 2');      // 선행 피연산자가 true이므로 후행 피연산자 평가.
// console.log();

// 0 || console.log('first true 1');           // 선행 피연산자가 false이므로 후행 피연산자 평가.
// 1 || console.log('first true 2');       // 선행 피연산자가 true이므로 후행 피연산자 평가 중단.
// console.log("----------------------")


// console.log(null && 1 && 'string');
// console.log(1 && null && 'string');
// console.log(1 && 'string' && NaN);
// console.log(1 && 'string' && 2);
// console.log();

console.log(1 || undefined || '');
console.log(null || 2 || 'string');
console.log('' || NaN || 3);
console.log('' || NaN || undefined);