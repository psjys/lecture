/*
    < 상품 재고 입력을 통한 테이블 구현 >
*/
'use strict';

let itemName = ['품목', '가격', '수량'];
let itemData = [
    ['', '', ''],
    ['', ' 원', ' 개'],
];

function addProduct() {
    document.write('<tr>');

    for (let i = 0; i < itemName.length; i++) {
        document.write(`<td>${itemData[0][i]}${itemData[1][i]}</td>`);
    }

    document.write('</tr>');
}

function checkInput(i) {
    itemData[0][i] = prompt(`${itemName[i]} :`);

    if (itemData[0][i] === null) return 1;
    else if (itemData[0][i] === '') {
        alert('입력된 값이 없습니다.');

        return checkInput(i);               // "취소" 버튼을 눌렀을 때 함수의 입력 로직이 그대로 동일하게 적용되는 특성을
    }                                       // 활용하여 재귀호출을 적용함으로써, 입력함수에 적용된 구조를 제거하여 복잡한
    //                                      // 구조가 적용되는 경우 좀 더 단순하고 유연한 구조 적용 가능.
    return 0;
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