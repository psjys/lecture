'use strict';

let n1, n2;
let sum = 0;

do {
    n1 = +prompt(`정수 1 : `);
    n2 = +prompt(`정수 2 : `);
} while (n1 > n2);

for (let i = n1; i <= n2; i++) {
    sum += i;
}
alert(`${n1} 부터 ${n2} 까지의 합 : ${sum}`);


let un, up;
let tot = 0;


do {
    un = +prompt(`정수1 : `);
    up = +prompt(`정수2 : `);
} while (un > up);

for (let i = un; i<= up; i++) {
    tot += i;
}

alert(`${un}의 ${up}까지 합 : ${tot}`);