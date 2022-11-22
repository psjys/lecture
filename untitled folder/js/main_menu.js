'use strict';

// 메뉴 슬라이드
let menuContainer = document.querySelector('.menuContainer'),
    menuDiv = menuContainer.querySelector('.main-top'),
    menuBackBtn = document.querySelector('.btn_back'),
    menuForwardBtn = document.querySelector('.btn_forward'),
    menu = menuDiv.querySelectorAll('.pop_pro');

let slide_idx = 0,
    slide_endidx = menu.length - 1,
    beforeTime = -new Date();

//연속클릭방지 지연시간
function time() {
    let currentTime = new Date();

    if (currentTime - beforeTime > 1000) {
        beforeTime = currentTime;
        return true;
    }
}

// 버튼
function back() {
    if (slide_idx != 0) {
        slide_idx = slide_idx + +menuBackBtn.dataset.moveValue;
    }
    menuForwardBtn.classList.remove('nonVisible');
    if (slide_idx <= 0) {
        menuBackBtn.classList.add('nonVisible');
    }
}

function forward() {
    slide_idx = slide_idx + +menuForwardBtn.dataset.moveValue;

    menuBackBtn.classList.remove('nonVisible');
    if (slide_idx >= slide_endidx) {
        menuForwardBtn.classList.add('nonVisible');
    }
}

menuContainer.addEventListener('click', function (e) {
    e.preventDefault();
    if (time()) {
        const btn = e.target.closest('a');
        if (btn === menuBackBtn) {
            back();
        } else if (btn === menuForwardBtn) {
            forward();
        }
        menu[0].style.left = `${slide_idx * -100}%`;
    }
});
