'use strict';

// 문제 4
// let total = 0;

// for (let i = 1; i <= 100; i++) {
//     if (i % 3 == 0) {
//         total += i;
//     }
// }
// console.log(total);


// 문제 5
// let num1, num2, num3;
// let average;

// for (; ;) {
//     num1 = +prompt(`정수 1`);
//     if (!(num1 == '')) {
//         num2 = +prompt(`정수 2`);
//         if (!(num2 == '')) {
//             num3 = +prompt(`정수 3`);
//             if (!(num3 == '')) {
//                 alert(`average = ${(num1 + num2 + num3) / 3}`);
//                 break;
//             }
//         }
//     }
//     alert(`다시 입력`);
// }
// 처음부터 돌아가는게 아니고 잘못 입력한 숫자부터 다시 입력하게 하려면?

//문제 6

// const array = [];

// for (let i = 0; i < 11; i++) {
//     array[i] = i;
// }

// console.log(array);


// 문제 7
// const numList = [10, 25, 48, 98, 57];

// let min = 100, max = 0;

// for (let i = 0; i < numList.length; i++) {
//     if (numList[i] > max) max = numList[i];
//     if (numList[i] < min) min = numList[i];
// }

// console.log(`${max}, ${min}`);

// 문제 8 
// const array = [];

// for (let i = 0; i < 5; i++) {
// }

// let max = 0, min = 100;
// let sum = 0;

// for (let i = 0; i < 5; i++) {
//     array[i] = +prompt(`정수 ${i + 1} :`);
//     if (array[i] > max) max = array[i];
//     if (array[i] < min) min = array[i];

//     sum += array[i];
// }

// alert(`최소값 : ${min}, 최대값 : ${max}, 합 : ${sum}`);

// 문제 9

// 'use strict';

// const array1 = [20, 10, 5, 52, 64, 34, 75, 16, 85, 50];
// const array2 = [34, 65, 84, 46, 69, 97, 20, 42, 67, 30];
// const result = [];

// // 두개의 배열이 있다. 두 배열이 가진 요소를 이용해서 요소의 합을 담은 배열을 만드는 프로그램을 구현하라.
// // ex) 인덱스 0끼리 더한 값 20 + 34 + 54
// // [54, ...]

// for (let i = 0; i < array1.length; i++) {
//     result[i] = array1[i] + array2[i];
// }

// console.log(result);

// 문제 10
'use strict';

const array = ['아이유', 1993, 516, '좋은날', '너랑나', 2008, 918, '팔레트', 161.8, '스트로베리 문', 13,];
const stringArray = [];
const numberArray = [];

/**
 * 주어진 배열 array에서 문자열과 숫자를 분리하려고 한다.
 * 문자열이면 stringArray로 넣고 숫자면 numberArray로 넣는 프로그램을 구현하라.
 * 편의상 결과는 콘솔로 찍는 것으로 한다.
 */

for ( let i = 0 ; i < array.length ; i++) {
    if (array[i] == ) {
        stringArray[i];
    } else {
        numberArray[i];
    }
    
}