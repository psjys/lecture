// resize 이벤트
// 클릭 시 트랜지션 &색깔 검은색으로 바뀌기
// 자바 스크립트로 #아이디 이용하기 어떻게..?
// 헤더 높이만큼 margin-top 구현
// 코드 최대한 최적화 시키기


// 이벤트 위임 버전으로 고치기
// contents ~~ 효율적으로 고치기 (이전)

// 'use strict';

// const header = document.querySelector('header');
// const menuBtn = header.getElementsByTagName('a');
// const contents = header.querySelector ('.contents');
// const main = document.querySelector('main');

// let beforeBtn = menuBtn[0],
//     beforeHref;

// function setMain () {
//     main.style.marginTop = header.offsetHeight + 'px';
// }
// function viewContent (self) {
//     contents.querySelector(beforeBtn.getAttribute('href')).style.display = 'none';
//     contents.querySelector(self.getAttribute('href')).style.display = 'block';
// }
// viewContent(beforeBtn);
// setMain();

// for (let i = 0; i < menuBtn.length; i++) {
//     menuBtn[i].addEventListener('click', function () {
//         beforeBtn.classList.remove('selected');
//         this.classList.add ('selected');

//         viewContent(this);

//         setMain();
//         beforeBtn = this;
//     });
// }

// window.addEventListener('resize', setMain);


// 'use strict'

// let main = document.querySelector('main'),
//     header = document.querySelector('header'),
//     ul = header.querySelector('ul'),
//     menuBtn = ul.querySelectorAll('a'),
//     contents = header.querySelector('.contents');

// let beforeBtn = menuBtn[0];
// let beforeBox = contents.querySelector('div');

// function setMain() {
//     main.style.marginTop = header.offsetHeight + 'px';
// }
// function display (x) {
//     beforeBox.style.display = x;
// }

// display('block');

// setMain();

// ul.addEventListener('click', function (e) {
//     let oj = e.target;
//     let currentBox = contents.querySelector(oj.getAttribute('href'));

//     if (oj.tagName == 'A') {

//         beforeBtn.classList.remove('selected');
//         oj.classList.add('selected');

//         display ('none'); 
//         currentBox.style.display = 'block';

//         beforeBtn = oj;
//         beforeBox = currentBox;

//         setMain();
//     }
// });

// window.addEventListener('resize', setMain);



// sticky 버전

'use strict';

let main = document.querySelector('main'),
    header = document.querySelector('header'),
    ul = header.querySelector('ul'),
    menuBtn = ul.querySelectorAll('a'),
    contents = header.querySelector('.contents');

let beforeBtn = menuBtn[0];
let beforeBox = contents.querySelector('div');

function display(x) {
    beforeBox.style.display = x;
}

display('block');

ul.addEventListener('click', function (e) {
    let oj = e.target;
    let currentBox = contents.querySelector(oj.getAttribute('href'));
    e.preventDefault();

    if (oj.tagName == 'A') {

        beforeBtn.classList.remove('selected');
        oj.classList.add('selected');

        display('none');
        currentBox.style.display = 'block';

        beforeBtn = oj;
        beforeBox = currentBox;
    }
});

// sticky 다음에 발생하게 
setTimeout(function () {
    window.scroll(0, 0);
}, .1);
