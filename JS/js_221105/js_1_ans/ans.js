'use strict';

import executable from "./executable.js";

const page_container = document.querySelector('.page_container'),
    pageFrame = page_container.querySelector('.pageFrame'),
    img = pageFrame.getElementsByClassName('img'),
    btn = page_container.getElementsByClassName('btn');

const page_pos = [0, -100, -200, -300],     // 페이지 포지션(top) 위치 저장.
    DELAYTIME = 750,
    confirmActionable = executable(DELAYTIME);

const img_ar = [
    './image/bg1.jpg',
    './image/bg2.jpg',
    './image/bg3.jpg',
    './image/bg4.jpg',
];

let pageIdx = 0;                        // 현재 페이지 인덱스.

/* ============================================================================== */
// 배열을 이용한 이미지 백그라운드 초기화.

for (let i = 0; i < img.length; i++) {
    img[i].style.background = `url(${img_ar[i]}) center/100% 100%`;
}

/* ============================================================================== */

function downBtn() {
    if (confirmActionable()) {
        if (pageIdx < page_pos.length - 1) {
            pageFrame.style.top = `${page_pos[++pageIdx]}%`;
        }
    }
}

function upBtn() {
    if (confirmActionable()) {
        if (pageIdx > 0) {
            pageFrame.style.top = `${page_pos[--pageIdx]}%`;
        }
    }
}

function activeWheel(e) {    
    if (e.deltaY > 0) {
        downBtn();
    } else {
        upBtn();
    }
}

/* ============================================================================== */

btn[1].addEventListener('click', downBtn);

btn[0].addEventListener('click', upBtn);

window.addEventListener('wheel', activeWheel);