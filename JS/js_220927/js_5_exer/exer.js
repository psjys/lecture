'use strict';

// let n, m;
// let total = 1;

// while (1) {
//     n = +prompt(`밑수 : `);
//     if (n >= 0) {
//         m = +prompt(`지수 : `);
//         if (m >= 0) break;
//     }
//     alert(`음수가 입력되었습니다. 재입력 바랍니다`);
// }

// for (let i = 1 ; i <= m ; i++) {
//     total *= n;
// }
// alert(`${n}의 ${m} 승은 ${total} 입니다.`);


let un, up;
let p = 1;

for ( ; ;) {
    un = +prompt(`밑수 :`);
    if (un >=0 ) {
        up = +prompt(`지수 :`);
        if (up >= 0) {
            for (let i = 0 ; i < up ; i++) {
                p *= un;
            }
            break;
        }
    }
    alert(`음수가 입력되었습니다. 재입력 바랍니다.`);
}
alert(`${un}의 ${up}승은 ${p}입니다.`);