/* 
3분의1 스크롤되는 시점부터 탑버튼 생성 
v opacity 적용 
v hover 하면 너비 늘어남 + opacity1 
v 손가락 생기기 
위로 천천히 
3분의1 지점 돌아가면 다시 없어짐
*/

'use strict';

let topBtn = document.querySelector('.scrollTop');
let scrollY;

document.addEventListener('scroll', () => {
    scrollY = parseInt(window.scrollY);

    if (scrollY >= (screen.height) / 3) {
        topBtn.style.display = 'block';
        topBtn.style.transition = .5;
    } else {
        topBtn.style.display = 'none';
    }
})

topBtn.addEventListener('mouseenter' , () => {
    topBtn.style.opacity = '1';
    topBtn.style.width = '80px';
    topBtn.style.cursor = 'pointer';
});

topBtn.addEventListener('mouseleave', () => {
    topBtn.style.opacity = .5;
    topBtn.style.width = '40px';
});

topBtn.addEventListener('click', () => {
    let id = setInterval(function () {
        window.scroll(0, scrollY -= 5);
        if(scrollY <= 0) {
            clearInterval(id);
        }
    }, 5);
});