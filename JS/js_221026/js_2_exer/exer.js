// resize 이벤트
// 클릭 시 트랜지션 &색깔 검은색으로 바뀌기
// 자바 스크립트로 #아이디 이용하기 어떻게..?
// 헤더 높이만큼 margin-top 구현
// 코드 최대한 최적화 시키기


// 이벤트 위임 버전으로 고치기
// contents ~~ 효율적으로 고치기 (이전)

'use strict';

const header = document.querySelector('header');
const menuBtn = header.getElementsByTagName('a');
const contents = header.querySelector ('.contents');
const main = document.querySelector('main');

let beforeBtn = menuBtn[0],
    beforeHref;

function setMain () {
    main.style.marginTop = header.offsetHeight + 'px';
}
function viewContent (self) {
    contents.querySelector(beforeBtn.getAttribute('href')).style.display = 'none';
    contents.querySelector(self.getAttribute('href')).style.display = 'block';
}
viewContent(beforeBtn);
setMain();

for (let i = 0; i < menuBtn.length; i++) {
    menuBtn[i].addEventListener('click', function () {
        beforeBtn.classList.remove('selected');
        this.classList.add ('selected');
        
        viewContent(this);

        setMain();
        beforeBtn = this;
    });
}

window.addEventListener('resize', setMain);
// window.addEventListener('resize', {
//
// })
