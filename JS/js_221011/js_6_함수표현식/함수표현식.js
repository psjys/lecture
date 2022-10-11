'use strict';

const namingFunc = function identity() {
    console.log('Naming func');
}; 

namingFunc();
// console.log(identify()); 직접 호출 불가
console.log(namingFunc); // 참조 변수 통한 함수명 (식별자) 확인 가능 
console.log();

const sum = function (a, b, c) {
    return a+b+c ;
};

console.log(sum(1, 2, 3));
console.log();

const varSum = function (obj) {
    return obj.n1 + obj.n2 + obj.n3 + obj.n4 + obj.n5;
};

console.log(varSum({n1 : 1, n2 : 2, n3 : 3, n4 : 4, n5 : 5}));
console.log();

const output = function () {
    console.log('출력테스트');
};

const call_output = function (test) {
    test();
};

call_output(output);


