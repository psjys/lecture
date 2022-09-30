'use strict';

const a = new Array(5);
// 배열 생성
for (let i = 0; i < a.length; i++) {
    a[i] = new Array(5)
}

// 값 생성
for (let i = a.length - 1, v = 1; i >= 0; i--) { // 행
    for (let j = a.length - 1; j >= a.length - 1 - i; j--) {
        a[i][j] = v++;
    }
}
let n;
n = +prompt(`정수 입력 : `);

switch (n % 4) {
    case 0:
        av = a[i][j];
        if (j < a.length - 1 - i) {
            document.write('&nbsp;&nbsp;');
        } else {
            document.write(`${(av / 10 < 1 ? '&nbsp;' : '')}${av}`);
        }
        break;

    case 1:
        av = a[i][j];
        document.write(`${av / 10 < 1 ? '&nbsp;' : ''}${av}`);
        break;

    case 2:
        av = a[i][j];
        document.write(`${av / 10 < 1 ? '&nbsp;' : ''}${av}`);
        break;
    case 3:
        if (j < i) {
            document.write('&nbsp;&nbsp;');
        } else {
            av = a[i][j];
            document.write(`${av / 10 < 1 ? '&nbsp;' : ''}${av}`);
        }
}


// 값 출력
// for (let i = 0, av; i < a.length; i++) {
//     for (let j = 0; j < a.length; j++) {
//         av = a[i][j];
//         if (j < a.length - 1 - i) {
//             document.write('&nbsp;&nbsp;');
//         } else {
//             document.write(`${(av / 10 < 1 ? '&nbsp;' : '')}${av}`);
//         }
//     }
//     document.write(`<br/>`);
// }
document.write(`<br/>`);


//============================

const temp = new Array(5);
// 배열 생성
for (let i = 0; i < temp.length; i++) {
    temp[i] = new Array(5)
}

for (let i = a.length - 1; i >= 0; i--) {
    for (let j = a.length - 1; j >= 0; j--) {
        temp[j][a.length - 1 - i] = a[i][j];
    }
}

for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a[i].length; j++) {
        a[i][j] = temp[i][j];
    }
}
// // 값 출력
// for (let i = 0, av; i < a.length; i++) {
//     for (let j = 0; j <= i; j++) {
//         av = a[i][j];
//         document.write(`${av / 10 < 1 ? '&nbsp;' : ''}${av}`);
//     }
//     document.write(`<br/>`);
// }
// document.write(`<br/>`);


//============================

const c = new Array(5);
// 배열 생성
for (let i = 0; i < c.length; i++) {
    c[i] = new Array(5)
}

for (let i = a.length - 1; i >= 0; i--) {
    for (let j = a.length - 1; j >= 0; j--) {
        c[4 - i][4 - j] = a[i][j];
    }
}

for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a[i].length; j++) {
        a[i][j] = c[i][j];
    }
}

// // 값 출력
// for (let i = 0, av; i < a.length; i++) {
//     for (let j = 0; j <= 4 - i; j++) {
//         av = a[i][j];
//         document.write(`${av / 10 < 1 ? '&nbsp;' : ''}${av}`);
//     }
//     document.write(`<br/>`);
// }
// document.write(`<br/>`);

//============================

const d = new Array(5);
// 배열 생성
for (let i = 0; i < d.length; i++) {
    d[i] = new Array(5)
}

for (let i = a.length - 1; i >= 0; i--) {
    for (let j = a.length - 1; j >= 0; j--) {
        d[a.length - 1 - j][i] = a[i][j];
    }
}

for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a[i].length; j++) {
        a[i][j] = d[i][j];
    }
}

// 값 출력
// for (let i = 0, av; i < a.length; i++) {
//     for (let j = 0; j < a.length; j++) {
//         if (j < i) {
//             document.write('&nbsp;&nbsp;');
//         } else {
//             av = a[i][j];
//             document.write(`${av / 10 < 1 ? '&nbsp;' : ''}${av}`);
//         }
//     }
//     document.write(`<br/>`);
// }
document.write(`<br/>`);

