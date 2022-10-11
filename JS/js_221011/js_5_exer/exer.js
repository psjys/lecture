'use strict';

let a1 = [1, 2, 3],
    a2 = [11, 12, 13],
    a3 = [21, 22, 23];

function joinAr(...array) {   // 2차원 배열 생성
    return array;
}

function printAr(array) {    // 2차원 배열 출력
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

printAr(joinAr(a1, a2, a3)); 