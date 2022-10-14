'use strict';

let body = document.querySelector('body'),
    h1 = document.querySelector('h1');

function changeBlackBg() {
    body.style.backgroundColor = 'black';
}

function changeWhiteBg () {
    body.style.backgroundColor = 'white';
}

function changeBlackBg_GreenColor () {
    body.style.backgroundColor = 'black';
    body.style.color = 'green'
}

function changeWhiteBg_RedColor () {
    body.style.backgroundColor = 'white';
    body.style.color = 'red'
}


/*
    HTML 에서 해당 태그의 onclick 이벤트 속성에서 호출된 함수의 실인수로 this 를
    전달함으로써 요소 자기 자신에 대한 참조를 직접 전달.
    이를 함수 정의부의 매개변수 self 인자로 받아 처리함으로써, querySelector 를
    통한 별도의 id 선택자의 지정없이 self 인자를 통해 바로 해당 요소를 참조 가능.
*/

function switchBlack_WhiteBG (self) {
    if(self.value === '블랙배경') {
        body.style.backgroundColor = 'black';
        self.value = '화이트배경';
    } else {
        body.style.backgroundColor = 'white';
        self.value = '블랙배경';
    }
}

function joinContent_changeColor () {
    h1.textContent = h1
    .textContent
    .concat(' 완료');
    h1.style.color = 'blue';
}
