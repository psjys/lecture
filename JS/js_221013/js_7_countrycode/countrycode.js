'use strict';

const countryCode1 = {
    3: '영국',          // 프로퍼티의 키가 정수 형태인 경우 자동으로 정렬되지만, 그렇지 않은 경우에는
    4: '미국',          // 정의한 그대로 순서가 결정.    또한 정수 형태의 프로퍼티가 정수 형태가 아닌
    2: '가나',          // 다른 프로퍼티 키 보다 항상 정렬 순서가 높음.
    1: '한국',
}

console.log(countryCode1);
console.log();


const countryCode2 = {
    '코드': '국명',
    3: '영국',
    4: '미국',
    2: '가나',
    1: '한국',
}

console.log(countryCode2);
console.log();


const countryCode3 = {
    '코드': '국명',
    '+3': '영국',       // 정수 형태의 프로퍼티 키에 부호 문자 '+'를 결합시켜 순수 문자열 형태로
    '+4': '미국',       // 변형시킴으로써 정의한 순서 그대로 표현되는 것을 확인 가능.
    '+2': '가나',
    '+1': '한국',
}

console.log(countryCode3);