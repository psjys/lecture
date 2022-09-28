'use strict';

let max = 0, min = 100;
let stNum;
let sc;

stNum = +prompt(`학생 수 : `);

for (let i = 0; i < stNum ; i++) {
    sc = +prompt(`점수 : `);

    max = Math.max(sc, max);
    min = Math.min(sc, min);
}

alert(`최대값 : ${max}, 최소값 : ${min}`);