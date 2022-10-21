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
    li = document.getElementsByTagName('li'),
    v = 0;

let startTime = new Date();

button[1].addEventListener('click', function () {
    let nextTime = new Date();
    if (nextTime - startTime > 500) {
        v += 1;
        if (v == 1) {
            button[0].style.visibility = 'visible';
        }
        imgBlock[0].style.right = `${v}00%`;
        if (v == li.length-1) {
            button[1].style.visibility = 'hidden';
        }
        startTime = nextTime;
    }
});

button[0].addEventListener('click', function () {
    let nextTime = new Date();
    if (nextTime - startTime > 500) {
        v -= 1;
        if (v == 0) {
            button[0].style.visibility = 'hidden';
        }
        imgBlock[0].style.right = `${v}00%`;
        if (v == li.length - 2) {
            button[1].style.visibility = 'visible';
        }
        startTime = nextTime;
    }
});
