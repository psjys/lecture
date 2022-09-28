'use strict';

const a = [70, 60, 55, 90, 80];
let min= 100, max =0;

for (let i = 0; i < a.length; i++) {
    if (a[i]>max) max=a[i];
    if (a[i]<min) min=a[i];
}

console.log(max + ' ' + min);