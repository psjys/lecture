'use strict';

// console.log('가나다');
// document.write(123); // 웹페이지에 직접 찍을 수 있음

// console.log(123);           // 콘솔에 출력.( 구두점 세미콜론(;)은 생략 가능. ) - 자바스크립트, 웹 브라우저 모두 허용.

// document.write(123);        // 브라우저 화면에 출력.   - 웹 브라우저만 허용.

// console.log(456);                  // 바로 실행시키지 않고 개행하여 코드를
// document.write(456 + '<br/>');     // 나열할 때에는 "shift + Enter".

// console.log("출력테스트1\n\n");       // 자바스크립트에서는 문자열 표기 구두점을 
// console.log('출력테스트2');           // 더블 쿼트(""), 싱글 쿼트('') 모두 인정.
// document.write("출력테스트1" + '<br/>');
// document.write('출력테스트2');

// // console.clear();                // 브라우저 콘솔 화면 삭제.


console.log('콘솔 출력 테스트');     // 브라우저 내장 객체로써 기본적으로 끝에 개행 문자를 포함.
console.log('n = %d, k = %d', 4, 5.4);       // 제한적인 숫자 서식을 지원하여 %d는 숫자 그대로를 %i는 정수 서식을 표현.
console.log('n = %d, k = %i', 4, 5.4);       // 크롬의 경우 %d, %i외에 별도의 숫자 서식을 지원하지 않음.
console.log();


console.log('n1 = %d, n2 = %d\n', 1, 2, '출력완료');    // 서식에 대응되는 값 외에 추가적인 인수 값도 공백을 포함하여 출력.
console.log('n1 = %d, n2 = %d', 1, 2, '출력완료');      // 추가 인수에 대한 공백이 앞에 자동으로 추가됨을 확인 가능. 
console.log();


console.log('n1 = %d, n2 = %d'          /* 프리 코딩 방식이 지원되어 블럭 괄호를 제외한 커플 구분자를 쪼개지 않는 범위에서
                                           자유로운 코딩 가능.                                                          */
    , 5, 8, '출력완료');
// console.log('n1 = %d, n2 = %d        // 이와같이 커플 구분자('') 사이를 개행하여 분리되는 코딩은 불가.
// ', 5, 8, '출력완료');
console.log(`n1 = %d, n2 = %d

`, 5, 8, '출력완료');           /* 템플릿 리터럴 형식을 이용하면 이와같이 백틱(``)내에 키보드를 통하여 표현하는 모든 것이
                                  그대로 문자열 형태로 표현.                                                            */
console.log(`

-------------------------

`);


console.log('2000년 ' + 10 + '월 ' + 21 + '일 ' + true + null);   /* 자바와 같이 '+' 연산자에 대하여 유사한 결과를 확인
                                                                    가능하나, 이는 문자열에 대하여 다른 타입을 '+' 연산 시
                                                                    자동 문자열로 변환되어 문자열 결합 연산이 적용되는
                                                                    것이지 타입 확장의 개념이 아님에 유의               */

console.log(7 / 3);   // 일반 산술 연산 적용시에도 자바와 같이 동일 타입간 연산 결과가 동일 타입이
console.log(8 / 4);   // 나오는 것이 아니라 연산 결과 그대로가 반영되어 결과 산출.,
console.log('\n-------------------------\n');


function valueOfn1() {
    return 7;
}
function valueOfn2() {
    return 9;
}


console.log(`n1 = ${7}, n2 = ${9} 출력완료`);  // 백틱 내에 자리 표시자( ${} )를 이용하여 다양한 표현식을 직접 표현 가능.
console.log('n1 = ${7}, n2 = ${9} 출력완료');  /* 다른 문자열 구분자('',"") 내에서는 자리 표시자( ${} )가
                                                 그대로 문자열 형태로 표현되는 것을 확인 가능.       */ 

console.log(`n1 = ${valueOfn1()}, n2 = ${valueOfn2()} 출력완료`);  // 자리 표시자 내에는 함수 호출과 같은 표현식도 가능.

