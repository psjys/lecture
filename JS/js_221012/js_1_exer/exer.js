/*
    < 상품 재고 입력을 통한 테이블 구현 >
*/
'use strict';

let productName, productPrice, productCnt;    // 입력받은 항목(품목) 별 데이터를 저장하기 위한 변수.
//                                            // ( 테이블의 항목이 늘어나는 만큼 변수를 추가로 정의 해야하는 문제점. ) - 배열



function addProduct() {                              // 입력받은 항목 별 데이터를 이용하여 구현 테이블의
    document.write('<tr>');                          // 행을 페이지에 표시하기 위한 함수 정의.
    //                                               // ( 테이블의 항목이 늘어나는 만큼 td 태그를 추가로 기술해야 하는 문제점. )
    document.write(`<td>${productName}</td>`);
    document.write(`<td>${productPrice} 원</td>`);
    document.write(`<td>${productCnt} 개</td>`);

    document.write('</tr>');
}

document.write('<table border=1>');

document.write('<caption>< 재고품목 ></caption>');
document.write('<tr>');
document.write('<th>품목</th>');                  // 테이블의 항목이 늘어나는 만큼 th 태그를 추가로 기술해야 하는 문제점.
document.write('<th>가격</th>');
document.write('<th>수량</th>');
document.write('</tr>');


outer:
while (1) {
    productName = prompt('품목 : ');        // 항목 별 데이터를 입력받아 처리하는 로직이 거의 동일하여 반복문 처리를 고려할
    if (productName === null) {             // 수 있지만, 이 경우 항목 별 저장 변수명이 다르고 prompt 함수에서 표시 문자열도
        break;                              // 달라 반복문 처리 불가.
    } else if (productName === '') {
        alert('입력된 값이 없습니다.');
        continue;
    }

    while (1) {
        productPrice = prompt('가격 : ');
        if (productPrice === null) {
            break outer;
        } else if (productPrice === '') {
            alert('입력된 값이 없습니다.');
            continue;
        }
        break;
    }

    while (1) {
        productCnt = prompt('수량 : ');
        if (productCnt === null) {
            break outer;
        } else if (productCnt === '') {
            alert('입력된 값이 없습니다.');
            continue;
        }
        break;
    }
    addProduct();
}

document.write('</table>');