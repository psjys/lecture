'use strict';

let n1, n2;

n1 = prompt(`정수 1 :`);
n2 = prompt(`정수 2 :`);

if (isNaN(n1 - n2)) {
    alert (`두 수 중 하나는 숫자가 아닙니다`);
} else {
    alert(`${n1
    
    
    } + ${n2} = ${+n1 + +n2}`);
}

n1= +prompt(`정수 1 :`);
n2= +prompt(`정수 2 :`);

tot = n1 + n2;

if (isNaN(tot)) {
    alert(`부 수 중 하나는 숫자가 아닙니다.`);
} else {
    alert(`${n1}+${n2}=${tot}`);
}