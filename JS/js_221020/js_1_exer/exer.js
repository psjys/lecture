/* 
이미지 화면 중앙 + radius
버튼 hover 했을 때 진하게
클릭 할 때 옆에 버튼 생성 + 슬라이드
마지막 페이지에 버튼 없어짐
중복 이벤트 적용 안되게 변경하기
*/

'use strict';


let button = document.getElementsByClassName('button'),
    imgBlock = document.getElementsByClassName('imgBlock'),
    v = 0;

button[1].addEventListener('click', function () {
    v += 100;
    if(v == 100) {
        button[0].style.visibility = 'visible';
    }
    imgBlock[0].style.right = `${v}%`;
    if(v == imgBlock.length) {
        button[1].style.visibility = 'hidden';
    }
});

button[0].addEventListener('click', function() {
    v -= 100;
    if(v == 0) {
        button[0].style.visibility = 'hidden';
    }
    imgBlock[0].style.right = `${v}%`;
    if(v == 300) {
        button[1].style.visibility = 'visible';
    }
}) 
