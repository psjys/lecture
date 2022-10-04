'use strict';
const str3 = 'replaces the matched substring with a replacement substring.';

console.log(str3.replace('sub', 'main'));
console.log(str3);
console.log(str3.replace('middle', 'center'));
console.log();

const str4 = 'Uses a regular expression';

console.log(str4.split()); // 인수를 모두 생략하면 전체 문자열이 하나의 배열 요소로 반환.

console.log(str4.split('')); // 구분자를 빈 문자열로 지정하면 대상 문자열의 모든 문자들을 배열 요소들로 반환

console.log(str4.split('',4)); // 제한자 인수를 두어 반환 배열 요소들을 제한.
console.log();

console.log(str4.split(' '));
console.log(str4.split(' ', 2));
console.log(str4.split(' ', [2])); // 구분자를 통해 반환 받은 배열을 통한 인덱싱
console.log();

console.log(str4.length); // length : 문자열의 길이를 조사한느 속성(property)
