'use strict';

const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const b = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

for (let i = 0, v; i < a.length; i++) {
    v = a[i];
    a[i] = b[i];
    b[i] = v;
}

document.write(`a 배열 : `);
for (let i = 0; i < a.length; i++) {
    document.write(`${a[i]} `);
}
document.write(`<br/>`);

document.write(`b 배열 : `);
for (let i = 0; i < a.length; i++) {
    document.write(`${b[i]} `);
}