/*
    < 상품 재고 입력을 통한 테이블 구현 >
*/
'use strict';

let itemName = ['품목', '가격', '수량'];
let itemData = [                        // 항목에 따른 입력 데이터와 입력 데이터에 따른 접미사를 저장하기 위한 2차원 배열 선언.
    ['', '', ''],         // 항목 별 입력 데이터 저장을 위한 배열.

    ['', ' 원', ' 개'],   // 항목 별 입력 데이터에 따른 접미사 저장을 위한 배열.
];

function addProduct() {
    document.write('<tr>');

    for (let i = 0; i < itemName.length; i++) {                          // 항목이 늘어나도 배열을 활용함으로써 반복문 적용을 통해 코드 압축 가능.
        document.write(`<td>${itemData[0][i]}${itemData[1][i]}</td>`);
    }

    document.write('</tr>');
}

document.write('<table border=1>');
document.write('<caption>< 재고품목 ></caption>');

document.write('<tr>');
for (let i = 0; i < itemName.length; i++) {         // 항목이 늘어나도 배열을 활용함으로써 반복문 적용을 통해 코드 압축 가능.
    document.write(`<th>${itemName[i]}</th>`);
}
document.write('</tr>');

outer:
while (1) {
    for (let i = 0; i < itemData[0].length; i++) {    // 배열을 활용함으로써 중복되는 로직을 통합.
        itemData[0][i] = prompt(`${itemName[i]} : `);
        if (itemData[0][i] === null) {
            break outer;
        } else if (itemData[0][i] === '') {
            alert('입력된 값이 없습니다.');
            i--;
        }
    }

    addProduct();
}

document.write('</table>');