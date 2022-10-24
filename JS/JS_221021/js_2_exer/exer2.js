'use strict'

let main = document.getElementsByClassName('main_container'),
    [backbtn, forwardbtn] = main[0].querySelectorAll('a'),
    img_container = main[0].getElementsByClassName('slide_list'),
    li = main[0].querySelectorAll('li');

let slide_idx = 0,
    slide_endidx = li.length - 1,
    beforeTime = -new Date();


//연속클릭방지 지연시간
function time() {
    let currentTime = new Date();

    if (currentTime - beforeTime > 1000) {
        beforeTime = currentTime;
        return true;
    }
}


// =========================================================
// 버튼입력

function back() {
    if (slide_idx != 0) {
        slide_idx = slide_idx + +backbtn.dataset.moveValue;
    }

    forwardbtn.classList.remove('nonVisible');
    if (slide_idx <= 0) {
        backbtn.classList.add('nonVisible');
    }
}

function forward() {
    slide_idx = slide_idx + +forwardbtn.dataset.moveValue;

    backbtn.classList.remove('nonVisible');
    if (slide_idx >= slide_endidx) {
        forwardbtn.classList.add('nonVisible');
    }
}

main[0].addEventListener('click', function (e) {
    if (time()) {
        const btn = e.target.closest('a');

        if (btn === backbtn) {
            back();
        } else if (btn === forwardbtn) {
            forward();
        }
        img_container[0].style.left = `${slide_idx * -100}%`;
    }
});


// =====================================================================================
// 자동슬라이드
function forwardAuto() {
    forward();
    if (slide_idx == slide_endidx + 1) {
        slide_idx = 0;
        back();
    }
    img_container[0].style.left = `${slide_idx * -100}%`;
}

let stopAutoSlide;

function autoSlide() {
    stopAutoSlide = setInterval(() => {
        forwardAuto();
    }, 1000);
}

img_container[0].addEventListener('mouseenter', autoSlide);
img_container[0].addEventListener('mouseleave', () => clearInterval(stopAutoSlide));

