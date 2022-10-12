/*
    < 상품 재고 입력을 통한 테이블 구현 >
*/
'use strict';

let itemName = ['품목', '가격', '수량'];
let itemData = [
    ['', '', ''],
    ['', ' 원', ' 개'],
];

function addProduct() {                           // 화면 출력 함수.
    document.write('<tr>');

    for (let i = 0; i < itemName.length; i++) {
        document.write(`<td>${itemData[0][i]}${itemData[1][i]}</td>`);
    }

    document.write('</tr>');
}

function checkInput(i) {                            // 입력과 화면 출력 로직에 대한 함수화를 구현함으로써 기능 모듈화를 통한
    for (; ;) {                                     // 재사용성 및 기존 입출력 제어 구조를 단순화하여 기능 통합의 용이성 증대.
        itemData[0][i] = prompt(`${itemName[i]} :`);
        if (itemData[0][i] === null) return 1;
        else if (itemData[0][i] === '') {
            alert('입력된 값이 없습니다.');

            continue;
        }

        return 0;
    }
}

document.write('<table border=1>');
document.write('<caption>< 재고품목 ></caption>');

document.write('<tr>');
for (let i = 0; i < itemName.length; i++) {
    document.write(`<th>${itemName[i]}</th>`);
}
document.write('</tr>');

outer:
while (1) {
    for (let i = 0; i < itemData[0].length; i++) {
        if (checkInput(i)) break outer;
    }

    addProduct();
}

document.write('</table>');