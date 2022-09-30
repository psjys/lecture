'use strict';

const a = new Array(5);
for (let i = 0; i < a.length; i++) {
    a[i] = new Array(5);
}

let s = 5;
let r = 0, c = -1;
let v = 1;
let f = 1;

for (; ;) {
    for (let i = 0; i < s; i++) {
        c += f;
        a[r][c] = v++;
    }
    s--;
    if (s <= 0) break;

    for (let i = 0; i < s; i++) {
        c += f;
        a[r][c] = v++;
    }
    f = -f;
}

for (let i = 0, av; i < a.length; i++) {
    for (let j = 0; j < a[i].length; j++) {
        av = a[i][j];
        document.write(`${av / 10 < 1 ? '&nbsp;' : ''}${av} `);
    }
    document.write(`<br/>`);
}