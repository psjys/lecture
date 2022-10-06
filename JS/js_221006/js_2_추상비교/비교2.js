
console.log('aa' <= 0);                  // false
console.log('aa' >= 0);                  // false
console.log();

console.log(NaN <= 0);                   // false
console.log(NaN >= 0);                   // false

console.log(undefined <= 0);             // false
console.log(undefined >= 0);             // false
console.log();

console.log('--------------');

console.log('' <= 0);                    // true
console.log('' >= 0);                    // true
console.log(false <= 0);                 // true
console.log(false >= 0);                 // true
console.log();

console.log(null <= 0);                  // true
console.log(null >= 0);                  // true
console.log(null >= 0 && null <= 0);     // true
console.log();