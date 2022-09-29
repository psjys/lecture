'use strict';

const a = new Array(5);

let min = 100 , max = 0, sum = 0;

for (let n = 0 ; n < 5 ; n++) {
    a[n] = +prompt(`배열의 ${n+1}번째 요소 입력 :`);
    
    if (a[n] > max) max = a[n];
    if (a[n] < min) min = a[n];
    
    sum += a[n];
}
for (let m = 0 ; m < a.length ; m++) {
    document.write(`배열 ${m+1}번째 : ${a[m]}`);
    if (m < a.length-1) {
        document.write(`, `);
    } 
}

document.write(`<br/> <br/>`);

document.write(`입력된 정수 중 최대값 : ${max} `);
document.write(`<br/>`);
document.write(`입력된 정수 중 최소값 : ${min} `);
document.write(`<br/>`);
document.write(`입력된 정수 총합 : ${sum}`);
