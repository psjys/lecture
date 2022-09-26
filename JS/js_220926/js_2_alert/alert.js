'use strict';

// let input;

// input = prompt();
// alert(input);

// input = prompt('입력');
// alert(input);

// input = prompt('입력', '기본데이터');
// alert(input);
//------------------------------------------
// let input = 10;
// let n1, n2;

// input % 5 == 0 ? n1 = input + 1 : n2 = input + 2;

// console.log(n1, n2);

//------------------------------------------

let input = 2;
let n1 = 1, n2 = 2;

switch (input) {
    case n1: //자바에서 case 옆에는 무조건 상수가 와야하지만 자스는 변수도 가능
        console.log(input + 1);
        break;
    case n2:
        console.log(input + 2);
        break;
    default:
        console.log('예외');
}

