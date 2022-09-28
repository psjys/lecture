'use strict';
let min = 100, max = 0;
let sc;

for (let i = 0; i < 5 ; i++) {
    sc = +prompt(`점수${i+1}: `);
    if (sc > max) max = sc;
    if (sc < min) min = sc;
} 

alert (`최대값 : ${max}, 최소값 : ${min}`);

