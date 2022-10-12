'use strict';

function calculator(n1, n2, op) {
    console.log(op(n1, n2)); // 함수호출
}

calculator(10, 3, (n1, n2) => n1 + n2);
calculator(10, 3, (n1, n2) => n1 - n2);
calculator(10, 3, (n1, n2) => n1 * n2);
calculator(10, 3, (n1, n2) => n1 / n2);

