'use strict';

let n1, n2;

n1 = +prompt(`정수 1 :`);
n2 = +prompt(`정수 2 :`);


alert(`${n1} 와 ${n2}의 차는 ${(n1 > n2 ? n1 - n2 : n2 - n1)} 입니다.`);


if (confirm(`창을 닫을까요?`)) {
    close();
}
