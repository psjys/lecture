/* 
3분의1 스크롤되는 시점부터 탑버튼 생성 
opacity 적용 
hover 하면 너비 늘어남 + opacity1 
손가락 생기기 
위로 천천히 
3분의1 지점 돌아가면 다시 없어짐
*/

'use strict';

let topBtn = document.querySelector('.scrollTop');

document.addEventListener('scroll', () => {
    if (parseInt(window.scrollY) >= innerHeight / 3) {
        topBtn.classList.add('scroll');
    } else {
        topBtn.classList.remove('scroll');
    }
})

topBtn.addEventListener('mouseenter', () => {
    topBtn.classList.add('btnhover');
});

topBtn.addEventListener('mouseleave', () => {
    topBtn.classList.remove('btnhover');
});

topBtn.addEventListener('click', () => {
    let id = setInterval(function () {
        window.scrollBy(0, -5);
        if (parseInt(window.scrollY) <= 0) {
            clearInterval(id);
        }
    }, 5);
});

