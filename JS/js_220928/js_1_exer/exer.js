'use strict';

let n, m, min, max;
let sum = 0;

n = +prompt(`정수 1 :`);
m = +prompt(`정수 2 :`);

if (n > m) {
    max = n;
    min = m; 
} else {
    min = n;
    max = m;
}
for (let i = min; i <= max; i++) {
    sum += i;
}

alert(`${min}부터 ${max}까지의 합 : ${sum}`);

//-------------------------------------------------------

n = +prompt(`정수 1 :`);
m = +prompt(`정수 2 :`);

if (n > m) {
    let t = n;
    n = m;
    m = t;
}
for (let i = n; i <= m; i++) {
    sum += i;
}
alert(`${n}부터 ${m}까지의 합 : ${sum}`);