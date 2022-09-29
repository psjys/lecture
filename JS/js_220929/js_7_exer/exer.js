'use strict';

const a = new Array(5);
// 배열 생성
for (let i = 0; i < a.length; i++) {
    a[i] = new Array(5)
}

// 값 생성
for (let i = 4, v = 1; i >= 0; i--) {
    for (let j = 4; j >= 4 - i; j--) {
        a[i][j] = v++;
    }
}

// 값 출력
for (let i = 0, av; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        av = a[i][j];
        if (j < 4 - i) {
            document.write('&nbsp; ');
        } else {
            document.write(`${(av / 10 < 1 ? '&nbsp;' : '')}${av}`);
        }
    }
    document.write(`<br/>`);
}

