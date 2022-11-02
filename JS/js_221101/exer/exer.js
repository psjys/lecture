'use strict';

import executable from './executable.js';                   // 실행가능 여부 측정 클로저 함수 임포트.

const body = document.querySelector('body'),
    main_container = body.querySelector('.main_container'),
    slides = main_container.querySelectorAll('.slide_list li'),
    btn = main_container.querySelectorAll('.main_container a'),
    pager = body.querySelector('.pager');                               // 페이저 컨테이너.

for (let i = 0; i < slides.length; i++) {
    pager.innerHTML += `<a href="#" data-direction=${i}></a>`;
}

const pagers = pager.querySelectorAll('.pager a');                      // 페이저.
let beforeIdx = 0,          // 직전 슬라이드 인덱스.
    currentIdx = 0;          // 현재 슬라이드 인덱스.

const DELAYTIME = 800,                          // 트랜지션을 통한 애니메이션 지속 시간.
    confirmActionable = executable(DELAYTIME);  // 실행가능 여부 측정함수. 외부 모듈을 통한 클로저(Closure) 함수 적용.

// ==================================================================================
/* 
    - 버튼 히든 설정 및 미설정 함수
    - 페이저 하이라이트 함수
    - 이미지 슬라이드 동작전 예비 동작 처리 함수
    - 실제 이미지 슬라이딩 동작 함수
*/

// < 버튼 히든 설정 및 미설정 함수 >
function checkStartEnd(idx) {
    btn[0].classList.remove('nonVisible');
    btn[1].classList.remove('nonVisible');
    if (idx <= 0) {
        btn[0].classList.add('nonVisible');
    } else if (idx >= slides.length - 1) {
        btn[1].classList.add('nonVisible');
    }
}

// < 페이저 하이라이트 함수 >
function highlightPager(nextIdx) {
    pagers[currentIdx].style.background = 'darkgray';
    pagers[nextIdx].style.background = 'rgb(49, 47, 47)';
}

// < 버튼과 페이저 동작전 슬라이드 예비 동작 처리 함수 >
function positionBeforMove(nextIdx, directionMove) {    // nextIde : 예비동작 슬라이드의 인덱스.
    const nextEle = slides[nextIdx];                    // directionMove : 예비동작 슬라이드의 위치값.( 1 : 100%, -1 : -100% )

    nextEle.classList.remove('animated');
    nextEle.style.left = `${directionMove * 100}%`;
}

// < 실제 이미지 슬라이딩 동작 함수 >
function activeSlide(nextIdx, directionMove) {          // nextIde : 실제동작 차슬라이드의 인덱스.
    const currentEle = slides[currentIdx],               // directionMove : 실제동작 당슬라이드의 위치값.( 1 : -100%, -1 : 100% )
        nextEle = slides[nextIdx];

    currentEle.classList.add('animated');
    currentEle.style.left = `${-directionMove * 100}%`; // 예비동작을 한 슬라이드와 당 슬라이드의 진행 방향 위치는
    //                                                  // 반대가 되어야 하므로 음수 적용에 주의.
    nextEle.classList.add('animated');
    nextEle.style.left = 0;

    highlightPager(nextIdx);
    checkStartEnd(nextIdx);

    /* 
        < 끝 요소에 대한 예비 동작 예외 처리 >

    - 끝이 아닌 페이저를 클릭 후 오토슬라이드에 호버해도 오른쪽에서 왼쪽으로 이동하는 오토슬라이드의
        특성상 직전 요소가 왼쪽으로 이동한 상태이므로, 다시 직전 페이저를 선택해도 오토슬라이드의
        역방향으로 이동되므로 문제가 되지 않으며 직전 요소(beforeIdx)와 현재 호버 요소
        (extractDirection)의 인덱스가 동일하여 예비동작 또한 실행되지 않음.
        하지만, 끝 페이저가 선택되어 있는 상황에서 오토슬라이드에 호버한 후 다시 끝 페이저를 호버할 때는
        마찬가지로 직전 요소와 현재 호버 요소의 인덱스가 동일하여 예비동작이 실현되지 않는 상태에서
        슬라이드 동작 상황이 첫 슬라이드에서 끝 슬라이드로 이동하는 형태가 되어야 하는데, 그러기 위해서는
        왼쪽으로 이미 진행된 끝 페이저 요소가 오른쪽에 미리 배치가 되어야 하는 예비 동작이 실행되어야하는
        문제 발생.
        따라서 현재 요소가 끝 요소이면 이러한 문제를 방지하기 위해 하기와 같이 딜레이를 통한 끝 요소의
        슬라이드 동작 완료후 우측에 다시 끝요소를 배치하는 별도의 예비 동작 실행을 통해 해결.
        단, 끝 요소라 하더라도 동일한 끝 요소를 연속 클릭하면, 끝 요소의 불필요하고 계속적인 우측 이동이
        발생되므로 이를 방지하기 위해 현재 인덱스와 다음 동작 인덱스가 다른 경우에만 동작하도록 보완 처리.
    */
    if (currentIdx === slides.length - 1 && currentIdx !== nextIdx) {
        setTimeout(() => {
            currentEle.classList.remove('animated');
            currentEle.style.left = '100%';
        }, DELAYTIME);
    }

    currentIdx = nextIdx;
}

// ==================================================================================

/* 
    < 이벤트 위임을 통한 개별 페이저의 클릭전 마우스 호버를 통한 예비 동작 이벤트 >

-   버튼에 대한 예비동작을 위한 요소의 감지는 최초 호버시에 해당하는 요소만
    감지되므로 mouseover 에서 감지할 수 없어 클릭시점에 적용.

=====================================================================================

※ 하기 페이저에 대한 마우스 호버 감지는 mouseenter 이벤트로는 이벤트 위임으로 인한
    자식요소에 대한 이벤트 캡처링 하강 전위가 이루어지지 않으므로 적용 불가.
*/
pager.addEventListener('mouseover', (e) => {
    const pagerBtn = e.target,
        extractDirection = +pagerBtn.dataset.direction;

    if (
        pagerBtn.tagName === 'A' &&
        currentIdx !== extractDirection &&                   // 현재 선택되어 있는 요소와 호버한 요소의 인덱스가 동일하면 무시.
        beforeIdx !== extractDirection

        /* 
            < beforeIdx !== extractDirection  >

        - 임의 요소가 선택되어 있는 상태에서 다른 요소를 클릭후 다시 원래의 요소를 호버하면
            예비 동작 처리로 인한 슬라이딩 동작 과정에서 이미지가 사라지는 현상 발생.
            즉, 이는 호버를 통한 예비 동작 요소와 직전 요소가 동일함으로 발생되는 현상이므로
            직전 요소와 예비 동작을 할 요소가 같으면 동작하지 않도록 처리.
        */
    ) {
        positionBeforMove(
            extractDirection,                       // 예비동작 슬라이드의 차인덱스.
            extractDirection > currentIdx ? 1 : -1   // 예비동작 슬라이드의 위치값.( 1 : 100%, -1 : -100% )
        );
    }
});

// ==================================================================================
/* 
    < 버튼과 페이저에 대한 클릭 이벤트 처리 >
*/
body.addEventListener('click', function (e) {
    const eventTarget = e.target.closest('a')

    if (this.contains(eventTarget) && confirmActionable()) {
        e.preventDefault();

        const extractDirection = +eventTarget.dataset.direction;
        let nextIdx = currentIdx + extractDirection;        // 버튼인 경우의 실제 동작 차인덱스.

        if (eventTarget.children[0]) {                     // 패이저가 아닌 버튼인 경우에만 하위 이미지 태그 요소가
            positionBeforMove(nextIdx, extractDirection);  // 존재하므로 버튼을 클릭했을 경우의 슬라이드 예비 동작 처리.
        } else {
            nextIdx = extractDirection;     // 페이저인 경우의 실제 동작 차인덱스.
        }

        beforeIdx = currentIdx;

        /* 
            버튼에 대한 슬라이드 이동전 다음 슬라이드의 슬라이딩 효과 적용을 위한
            예비동작 처리 함수(positionBeforMove)에서의 포지션 옵셋 left 적용과
            activeSlide 함수 에서의 옵셋 left 적용이 중첩되어 애니메이션 효과를
            볼 수 없으므로, 이를 위한 시간적 단차 적용.
        */
        setTimeout(() => {
            activeSlide(nextIdx, nextIdx > currentIdx ? 1 : -1);
        }, 10);
    }
});

// ==================================================================================
/*
    < slide_list 에 마우스 오버/아웃 했을 때의 동작 처리 >
*/

const slide_list = main_container.querySelector('.slide_list');
let autoSlide;

slide_list.addEventListener('mouseenter', () => {
    autoSlide = setInterval(() => {
        if (confirmActionable()) {
            let nextIdx = (currentIdx + 1) % slides.length;

            positionBeforMove(nextIdx, 1)
            beforeIdx = currentIdx;

            setTimeout(() => {
                activeSlide(nextIdx, 1);
            }, 10);
        }
    }, DELAYTIME);
});

slide_list.addEventListener('mouseleave', () => {
    clearInterval(autoSlide);
});