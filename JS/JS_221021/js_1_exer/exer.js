'use strict';

const main_container = document.querySelector('.main_container'),
    slide_list = main_container.querySelector('.slide_list'),
    li = slide_list.querySelectorAll('li'),
    btn = main_container.querySelectorAll('a');

let slide_idx = 0,                    // 현재 슬라이드 인덱스.
    slide_endIdx = li.length - 1,     // 슬라이드 인덱스 종료값.
    beforeEventTime = -new Date();    // 이전 이벤트 시작 시간. 최초 로드 즉시 클릭을 했을때 경과시간(1000)
//                                // 미만으로 클릭되지 않는 문제점 해결을 위해 음수 시간 지정

function executable() {               // 버튼 연속 실행 제어 함수.
    let currentEventTime = new Date();                                // 현재 이벤트 시작 시간.

    if (currentEventTime - beforeEventTime > 1000) {    // 일정시간이 지나야만 다음 이벤트가 실행될 수 있도록 구현.
        beforeEventTime = currentEventTime;

        return true;
    }
}

/* ================================================================================== */

function activeSlide(slideMove, checkIdx, self, other) {
    if (executable()) {
        slide_list.style.left = `${slideMove() * -100}%`;

        if (checkIdx()) {
            self.classList.add('nonVisible');
        } else {
            other.classList.remove('nonVisible');
        }
    }
}

btn[1].addEventListener('click', function () {
    activeSlide(() => ++slide_idx, () => slide_idx >= slide_endIdx, this, btn[0]);
});

btn[0].addEventListener('click', function () {
    activeSlide(() => --slide_idx, () => slide_idx <= 0, this, btn[1]);
})