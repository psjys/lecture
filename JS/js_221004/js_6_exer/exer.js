/*
    < 문제 >

- 다음과 같이 email 변수에 이메일 주소가 저장되어 있을 때,
  도메인명의 일부인 "daum.net"을 "naver.com"으로 변경하여 다시
  email 변수에 저장하도록 프로그램을 구현.

*/

'use strict';

let email = 'psy1234@daum.net';

email = email.replace(email.slice(email.lastIndexOf('@')), `@naver.com`);

console.log(email);