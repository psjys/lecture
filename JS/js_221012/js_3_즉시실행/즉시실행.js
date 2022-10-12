'use strict';

(function () {
    console.log(`IIFE 테스트`);
})();
console.log();

(() => {
    console.log(`화살표 함수를 IIFE로 테스트`)
})();
console.log();

let fruitName = (function (fruit) {
    switch (fruit) {
        case 'apple':
            return '사과';
        case 'banana':
            return '바나나';
        case 'melon':
            return '메론';
        case 'strawberry':
            return '딸기';
        default:
            return '해당 과일이 없습니다.'
    }
})('strawberry');
console.log(fruitName);
console.log();

// 람다식
fruitName = (fruit => {
    switch (fruit) {
        case 'apple':
            return '사과';
        case 'banana':
            return '바나나';
        case 'melon':
            return '메론';
        case 'strawberry':
            return '딸기';
        default:
            return '해당 과일이 없습니다.'
    }
})('banana');
console.log(fruitName);