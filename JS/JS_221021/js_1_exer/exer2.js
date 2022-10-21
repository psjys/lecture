'use strict';

const main_container = document.querySelector('.main_container'),
    slide_list = main_container.querySelector('.slide_list'),
    li = slide_list.querySelectorAll('li'),
    [backBtn, fowardBtn] = main_container.querySelectorAll('a');

let slide_idx = 0,                    // 현재 슬라이드 인덱스.
    slide_endIdx = li.length - 1,     // 슬라이드 인덱스 종료값.
    beforeEventTime = -new Date();    // 이전 이벤트 시작 시간. 최최 로드 즉시 클릭을 했을때 경과시간(1000)
//                                // 미만으로 클릭되지 않는 문제점 해결을 위해 음수 시간 지정.

function executable() {               // 버튼 연속 실행 제어 함수.
    let currentEventTime = new Date();                                // 현재 이벤트 시작 시간.

    if (currentEventTime - beforeEventTime > 1000) {    // 일정시간이 지나야만 다음 이벤트가 실행될 수 있도록 구현.
        beforeEventTime = currentEventTime;

        return true;
    }
}

/* ================================================================================== */

main_container.addEventListener('click', function (e) {
    if (executable()) {
        const btn = e.target.closest('a');

        if (btn === backBtn) {
            slide_idx--;

            fowardBtn.classList.remove('nonVisible');
            if (slide_idx <= 0) {
                backBtn.classList.add('nonVisible');
            } 
        } else if (btn=== fowardBtn) {
            slide_idx++;

            backBtn.classList.remove('nonVisible');
            if (slide_idx >= slide_endIdx) {
                fowardBtn.classList.add('nonVisible');
            } 
        } else {
            return;     // 버튼이 아닌 요소가 클릭되어도 인덱스(slide_idx)는 변하지 않으므로
            //          // return 을 굳이 하지 않아도 하기의 로직 실행으로 인한 변화는 
            //          // 없음. 따라서 실행에는 전혀 문제가 없으나 불필요한 로직 실행을 막기
            //          // 위해 return.
        }

        slide_list.style.left = `${slide_idx * -100}%`;
    }
});