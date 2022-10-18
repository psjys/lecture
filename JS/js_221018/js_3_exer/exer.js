'use strict'

let li = document.getElementsByTagName('li');

/* 
   < window 와 document >

- document 는 window 객체에 소속된 프로퍼티로써 window 는 브라우저를
  document 는 브라우저에 소속된 문서를 의미.

==========================================================================

   < load >

- 해당 객체의 자원과 그에 의존적인 모든 자원이 로드되었을 때의 이벤트.
  이벤트의 대상이 document 가 아닌 window 임에 주의.
*/
window.addEventListener('load', () => {
    for (let i = 0; i < li.length; i++) {
        li[i].style.backgroundColor = 'yellow';
    }
});

// =======================================================================

let scrollBox = document.querySelector('.scrollBox');

/* 
   < scroll >

- 수평 또는 수직으로 스크롤되었을 때의 이벤트.
  이벤트의 대상은 document 와 window 모두 가능.

==========================================================================

   < scrollX, scrollY >

- window 객체에 소속된 프로퍼티로써 각각 수평, 수직에 대한 스크롤량을
  number 형식으로 반환.
  반환되는 number 는 실수값으로 반환될 수 있음에 주의.

※ scrollX, scrollY 프로퍼티 접근 시 window 객체 생략 가능.
   따라서 선언없이 지역적 변수로 사용 시 전역값이 조사될 수 있음에 주의.
*/
let stop;

document.addEventListener('scroll', () => {

/* 
   scrollX, scrollY 에 대한 반환값이 실수인 경우를 대비하여
   parseInst 나 trunc 함수를 이용 실수부 절삭.
*/
let posX = parseInt(window.scrollX),
    posY = parseInt(window.scrollY);
// let posX = Math.trunc(window.scrollX),
//     posY = Math.trunc(window.scrollY);

scrollBox.style.display = 'block';
scrollBox.innerHTML = `스크롤량<br>( x = ${posX}, y = ${posY})`;




//================================
function scrollBack(scBack) {
    let stopTimeout = setInterval(() => {
        scBack();
        
        if (posX < 0 || posY < 0) {
            clearInterval(stopTimeout);
        }
    }, 5);
}

if (posX > 500) {
    scrollBack(() => window.scroll(posX -= 5, posY));
}

if (posY > 500) {
    scrollBack(() => window.scroll(posX, posY -= 5));
}
/*
    scrollBox 가 5초 뒤에 화면에 보이지 않도록 설정.
*/
    clearTimeout(stop);

    stop = setTimeout(() => {
        scrollBox.style.display = 'none';
    }, 5000);
});

