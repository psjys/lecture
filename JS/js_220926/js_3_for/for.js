'use strict';

// for (let i = 1; i < 10; i++) {
//     console.log(i);         //구하는 식 (기준 : 현재)
// }


// 67 ~ 84
// for (let i = 1; i < 84;) {
//     i++;
//     console.log(i);         // 구하는 식 (기준 : 현재)
// }

// 108 ~ 64
// for (let i = 108;;) {
//     console.log(i);         // 구하는 식 (기준 : 현재)
//     if (i <= 64) break;
//     i--;
// }

// for (let i = 109;;) {
//     i--;
//     if (i <= 63) break;
//     console.log(i);         // 구하는 식 (기준 : 현재)
// }

// 100 ~ 90
// for (let i = 100;;) {
//     console.log(i);
//     if (i <= 90) break;
//     i--;
// }

// 90 ~ 100 
for (let i = 90; i <= 100; i++) {
    console.log(i);
}

// 90 ~ 100
for (let i = 90;;) {
    console.log(i);
    if (i >= 100) break;
    i++;
}