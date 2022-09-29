'use strict';

const a = new Array(5);

for (let i = 0; i<a.length ; i++) {
    a[i] = new Array(4);
}

for (let i = 3, v = 1; i >=0; i--) {
    for (let j = 4; j >= 0 ; j--) {
        a[j][i] = v++;
    }
}
for(let i = 0; i < 5; i++){
    document.write(a[i]);
    document.write('<br/>');
}