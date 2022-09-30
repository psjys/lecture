'use strict';

const a = new Array(5);
for (let i = 0; i < a.length; i++) {
    a[i] = new Array(5);
}

for (let i = a.length - 1, v = 1; i >= 0; i--) {
    for (let j = a.length - 1; j >= a.length - 1 - i; j--) {
        a[i][j] = v++;
    }
}

for (let i = 0; i < a.length; i++) {
    for (let j = 0, av; j < a.length; j++) {
        if (j < a.length - 1 - i) {
            document.write('&nbsp;&nbsp; ');
        } else {
            av = a[i][j];
            document.write(`${av / 10 < 1 ? '&nbsp;' : ''}${av} `);
        }
    }
    document.write('<br/>');
}
document.write('<br/>');



const temp = new Array(5);
for (let i = 0; i < temp.length; i++) {
    temp[i] = new Array(5);
}

let n = 6;
n %= 4;

for (let k = 0; k < n; k++) {
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
}

for (let i = 0, ed; i < a.length; i++) {
    switch (n) {
        case 1:
            ed = i;
            break;
        case 2:
            ed = a.length - 1 - i;
            break;
        case 0:
        case 3:
            ed = a.length - 1;
            break;
    }
    for (let j = 0, av; j <= ed; j++) {

        if (n === 0 && j < a.length - 1 - i || n === 3 && j < i) {
            document.write('&nbsp;&nbsp; ')
        } else {
            av = a[i][j];
            document.write(`${av / 10 < 1 ? '&nbsp;' : ''}${av} `);
        }

    }
    document.write('<br/>');
}