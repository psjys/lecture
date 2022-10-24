/*
    컨테이너 안에 들어가면 이미지 자동 슬라이드 
    끝으로 가면 다시 처음으로 돌아옴 
    버튼 생겼다 없어지는것도 동일하게 적용 
    컨테이너 밖으로 나가면 멈춤
    버튼이랑은 관련 없지만 버튼 눌러도 작동하게
    html에 있는 data-move-value 무조건 써서 구현
*/

'use strict';

let slide_list = document.getElementsByClassName('.slide_list'),
    slide_container = document.getElementsByClassName('.slide_container'),
    li = document.getElementsByTagName('li'),
    button = document.getElementsByTagName('a');



// 이미지 자동 슬라이드 함수 
function slideImg() {
    
}


function slide() {
    let id = setInterval(slideImg, 1000);
}

function stop() {
    clearInterval(id);
}

slide_list[0].addEventListener('mouseenter', slide);

slide_list[0].addEventListener('mouseleave', stop);


// 버튼 생기고 없어지기 + 버튼 눌렀을 때 작동하기
let startTime = new Date(),
    v = 0;

button[1].addEventListener('click', function () {
    let nextTime = new Date();
    if (nextTime - startTime > 500) {
        v += 1;
        if (v == 1) {
            button[0].dataset.moveValue = 'visible';
        }
        slide_list[0].style.left = `${v}00%`;
        if (v == li.length - 1) {
            button[1].dataset.moveValue = 'hidden';
        }
        startTime = nextTime;
    }
});

button[0].addEventListener('click', function () {
    let nextTime = new Date();
    if (nextTime - startTime > 500) {
        v -= 1;
        if (v == 0) {
            button[0].dataset.moveValue = 'hidden';
        }
        slide_list[0].style.left = `${v}00%`;
        if (v == li.length - 2) {
            button[1].dataset.moveValue = 'visible';
        }
        startTime = nextTime;
    }
});