/*
    호버 했을 때 슬라이드
    하단 버튼 움직일 때 트랜지션
    하단 버튼 눌러도 사진 넘어감 
    앞으로 가는 과정이 사라짐
    html에서 이미지 감싸주는 컨테이너 하나 빠짐
    확장성 고려
    dataset 사용
    클릭하기 전에 누구를 클릭할지 미리 감지를 해놔야한다 -> 마우스엔터? 
    딜레이 막아놓음
*/

'use strict';

let slide_list = document.querySelector('.slide_list'),
    main_container = document.querySelector('.main_container'),
    slide_list_li = main_container.getElementsByTagName('li'),
    pager = document.querySelector('.pager'),
    pagerButton = pager.getElementsByTagName('a'),
    button = main_container.getElementsByTagName('a');

for (let i = 0; i < slide_list_li.length; i++) {
    pager.appendChild(document.createElement('a')).setAttribute('data-value', `${i}`);
}

let i = 0,
    beforeIdx = 0,
    slide;

pagerButton[0].classList.add('opacity');

for (let i = 1; i < slide_list_li.length; i++) {
    slide_list_li[i].classList.add('nonVisible');
}

function slideImg() {
    // 이미지 슬라이드
    slide_list_li[i].style.left = `0`;
    if (beforeIdx > i) {
        slide_list_li[beforeIdx].style.left = '100%';
    }
    else if (beforeIdx < i) {
        slide_list_li[beforeIdx].style.left = '-100%';
    }

    slide_list_li[i].classList.remove('nonVisible');
    slide_list_li[beforeIdx].classList.add('nonVisible');
    slide_list_li[(i + 1) % slide_list_li.length].style.left = '100%';

    // 하단 버튼 슬라이드
    pagerButton[i].classList.add('opacity');
    pagerButton[beforeIdx].classList.remove('opacity');

    beforeIdx = i;

    // 양 옆 버튼 생기기 없어지기
    if (i >= 1) {
        button[0].classList.remove('nonVisible');
    } else {
        button[0].classList.add('nonVisible');
    }
    if (i == slide_list_li.length - 1) {
        button[1].classList.add('nonVisible');
    } else {
        button[1].classList.remove('nonVisible');
    }
}

// setInterval
slide_list.addEventListener('mouseenter', function () {
    slide = setInterval(function () {
        i = ++i % slide_list_li.length;
        slideImg();
    }, 1500);
});

slide_list.addEventListener('mouseleave', function () {
    clearInterval(slide);
});


// 버튼 연속 실행 제어 함수.
let beforeEventTime = -new Date();

function executable() {
    let currentEventTime = new Date();    // 현재 이벤트 시작 시간.
    if (currentEventTime - beforeEventTime > 1000) {    // 일정시간이 지나야만 다음 이벤트가 실행될 수 있도록 구현.
        beforeEventTime = currentEventTime;
        return true;
    }
}

// 양 옆 버튼 눌렀을 때 넘어가기 - dataset
main_container.addEventListener('click', function (e) {
    if (executable()) {
        if (e.target.parentNode.hasAttribute('href')) {
            i += +e.target.parentNode.dataset.direction;
            slideImg();
        }
    }
});

// 하단 버튼 눌렀을 때 넘어가기 - mouseenter 했을 때 미리 대기
pager.addEventListener ('click', (e)=> {
    if (e.target.hasAttribute('data-value')) {
        i = +e.target.getAttribute('data-value');
        slideImg();
    }
})


// 호버 했을 때 위치 바꾸기
for (let i ; i <pagerButton.length ; i++) {
    pagerButton[i].addEventListener('mouseenter', function () {
        if (beforeIdx > i) {
            slide_list_li[i].style.left = '-100%';
        } else if (beforeIdx < i) {
            slide_list_li[i].style.left = '100%';
        }
    })
}