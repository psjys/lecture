'use strict';

/* 
< 사이트 URL을 이용한 비밀번호 생성 >

step1 : "http://" 부분은 제외하고 추출.                             =>      daum.net
step2 : 닷(.)부터 표시되는 문자열을 제외하여 추출.                   =>      daum
step3 : '$' + 처음 3자리 + 총 글자 수 + url 의 14번째 문자.         =>      $dau4e

※ url 의 14번째 문자가 존재하지 않을 때는 ? 문자로 표시.            =>      $dau4?
*/

let url = 'http://daum.net';
let step1, step2, step3;

step1 = url.split('//', 2);
step1 = step1[1];
console.log(step1);


step2 = step1.split('.', 2);
step2 = step2[0];
console.log(step2);

step3 = `$${step2.slice(0, 3)}${step2.length}${url[13] ? url[13] : '?'}`
console.log(step3);

// let url = 'http://daum.net';
// let step1, step2, step3;

// // step1 = url.slice(url.indexOf(':') + 3);
// step1 = url.split('//')[1];
// console.log(step1);

// // step2 = step1.slice(0, step1.indexOf('.'));
// step2 = step1.split('.')[0];
// console.log(step2);

// step3 = `$${step2.slice(0, 3) + step2.length}${url[13] ? url[13] : '?'}`
// console.log(step3);