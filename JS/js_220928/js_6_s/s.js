'use strict';

// for (let i = 0, n = 1; i < 5; i++) {
//     for (let j = 1; j <= 5; j++) {
//         document.write(`  ${(n / 10 < 1 ? '&nbsp;' : '') + n++} `);
//     }
//     document.write(`<br/>`);
// }

// document.write(`<br/>`);

// // 2번 =======================================

// for (let i = 1, n = 1; i <= 5; i++) {
//     for (let j = 1; j <= i; j++) {
//         document.write(` ${(n / 10 < 1 ? '&nbsp;' : '') + n++} `)
//     }
//     document.write(`<br/>`);
// }

// document.write(`<br/>`);

// // 3번 =======================================

// for (let i = 1, n = 1; i <= 5; i++) {
//     for (let j = 1; j <= 6 - i; j++) {
//         document.write(` ${(n / 10 < 1 ? '&nbsp;' : '') + n++} `);
//     }
//     document.write(`<br/>`);
// }

// document.write(`<br/>`);

// // 4번 =======================================

// for (let i = 1, n = 1; i <= 5; i++) {
//     for (let j = 1; j <= 5; j++) {
//         if (j < i) {
//             document.write(`&nbsp; &nbsp;`);
//         } else {
//             document.write(`${(n / 10 < 1 ? '&nbsp;' : '') + n++ + '&nbsp;'}`);
//         }
//     }
//     document.write(`<br/>`);
// }

// document.write(`<br/>`);

// // 5번 =======================================

// for (let i = 1, n = 1; i <= 5; i++) {
//     for (let j = 1; j <= 5; j++) {
//         if (j < 6 - i) {
//             document.write(`&nbsp; &nbsp;`);
//         } else {
//             document.write(`${(n / 10 < 1 ? '&nbsp;' : '') + n++ + '&nbsp;'}`);
//         }
//     }
//     document.write(`<br/>`);
// }
// document.write(`<br/>`);

// // 6번 =======================================

// let num1, m;
// num1 = 9;
// m = (num1 + 1) / 2;
// for (let i = 1, result = 1; i <= n; i++) {
//     for (let j = 1; j <= m - 1 + i; j++) {
//         if (j < m + 1 - i) {
//             document.write(`&nbsp; &nbsp;`);
//         } else {
//             document.write(`${(result / 10 < 1 ? '&nbsp;' : '') + n++ + '&nbsp;'}`);
//         }
//     }
//     document.write(`<br/>`);
// }
// document.write(`<br/>`);

// // 7번 =======================================

// for (let i = 1, n = 1; i <= 5; i++) {
//     for (let j = 1; j <= 6 - i; j++) {
//         if (j < i) {
//             document.write(`&nbsp; &nbsp;`);
//         } else {
//             document.write(`${(n / 10 < 1 ? '&nbsp;' : '') + n++ + '&nbsp;'}`);
//         }
//     }
//     document.write(`<br/>`);
// }
// 8번 =======================================

let m, s, e;
let n = +prompt(`정수 입력 :`);
let v = 1;



for (let i = 1; i <= n; i++) {

    m = (n + 1) / 2;

    if (i <= m) {
        s = i + m - 1;
        e = m + 1 - i;
    } else {
        s = n + m - i;
        e = i - m + 1;
    }
    for (let j = 1; j <= s; j++) {
        if (j < e) {
            document.write(`&nbsp; &nbsp;`);
        } else {
            document.write(`${(v / 10 < 1 ? '&nbsp;' : '') + v++ + '&nbsp;'}`);
        }
    }
    document.write(`<br/>`);
}
document.write(`<br/>`);

// 9번 =======================================

let st, ed, n, m;

for (let i = 1, v = 1; i <= n; i++) {
    m = (n+1)/2;

    if (i <= m) {
        st = i;
        ed = 6 - i;
    } else {
        st = 6 - i;
        ed = i;
    }
    for (let j = 1; j <= ed; j++) {
        if (j < st) {
            document.write(`&nbsp; &nbsp;`);
        } else {
            document.write(`${(v / 10 < 1 ? '&nbsp;' : '') + v++ + '&nbsp;'}`);
        }
    }
    document.write(`<br/>`)
}
document.write(`<br/>`);