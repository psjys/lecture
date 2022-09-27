'use strict';

let n1, n2;

n1 = +prompt('정수 1 :');
n2 = +prompt('정수 2 :');


if (n1 === n2) {
    alert(`두 수는 같음`);
} else {
    alert(`큰 수는 ${n1 > n2 ? n1 : n2}`);
}

close();