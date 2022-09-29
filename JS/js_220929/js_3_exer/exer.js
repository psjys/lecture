'use strict';

const ar1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const ar2 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const ar3 = [11, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const ar4 = [12, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const ar5 = [13, 9, 8, 7, 6, 5, 4, 3, 2, 1];

for (let i = 0, v; i < 5; i++) {
    document.write(`ar${i + 1} 배열 :`);
    for (let j = 0; j < 10; j++) {
        switch (i + 1) {
            case 1:
                v = ar1;
                break;
            case 2:
                v = ar2;
                break;
            case 3:
                v = ar3;
                break;
            case 4:
                v = ar4;
                break;
            case 5:
                v = ar5;
                break;
        }
        document.write(`${v[j]} `);
    }
    document.write(`<br/>`);
}
