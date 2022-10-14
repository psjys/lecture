'use strict';

let body = document.querySelector('body'),
    h1 = document.querySelector('h1');

let blackBg_Btn = document.getElementById('blackBg_Btn'),
    whiteBg_Btn = document.getElementById('whiteBg_Btn'),
    blackBgGreenColor_Btn =
        document.getElementById('blackBgGreenColor_Btn'),
    whiteBgRedColor_Btn =
        document.getElementById('whiteBgRedColor_Btn'),
    blackBgGreenText_Btn =
        document.getElementById('blackBgChangeText_Btn'),
    commit_Btn = document.getElementById('commit_Btn');

function changeBlackBg() {
    body.style.backgroundColor = 'black';
}

function changeWhiteBg() {
    body.style.backgroundColor = 'white';
}

blackBg_Btn.addEventListener('click', () => {
    changeBlackBg();
});

whiteBg_Btn.addEventListener('click', () => {
    changeWhiteBg();
});

blackBgGreenColor_Btn.addEventListener('click', () => {
    changeBlackBg();
    body.style.color = 'green';
});

whiteBgRedColor_Btn.addEventListener('click', () => {
    changeWhiteBg();
    body.style.color = 'red';
});

blackBgChangeText_Btn.addEventListener('click', () => {
    if (blackBgChangeText_Btn.value === '블랙배경') {
        changeBlackBg();
        blackBgChangeText_Btn.value = '화이트배경';
    } else {
        changeWhiteBg();
        blackBgChangeText_Btn.value = '블랙배경';
    }
});

/* 
    람다식 내에서의 this 는 빈 객체를 반환. 따라서 아래에서 this.value 는
    빈 객체에 대한 존재하지 않는 프로퍼티를 읽음으로써 undefined 값 반환.
    따라서 아래에서는 최초 버튼 클릭 시 무조건 else 구문으로 분기.
*/

blackBgChangeText_Btn.addEventListener('click', () => {
    if (this.value === '블랙배경') {
        changeBlackBg();
        this.value = '화이트배경';
    } else {
        changeWhiteBg();
        this.value = '블랙배경';
    }
});

/* 
    익명함수(익명객체) 내에서의 this 는 객체 자기 자신을 정상적으로 참조.
*/

blackBgChangeText_Btn.addEventListener('click', function () {
    console.log(this);
    if (this.value === '블랙배경') {
        changeBlackBg();
        this.value = '화이트배경'
    } else {
        changeWhiteBg();
        this.value = '블랙배경';
    }
    /* 
    람다식 내에서의 this 는 빈 객체를 반환하지만, 상위 익명함수
    (익명객체) 내에서 람다식의 this 는 익명함수의 this 로 수렴.
    */
    (() => console.log(this))();
});

/* ==================================================================== */

commit_Btn.addEventListener('click', () => {
    h1.textContent = h1
        .textContent
        .concat(' 완료');
    h1.style.color = 'blue';
});

/*
    DOM 프로퍼티를 이용한 이벤트 핸들러 할당과 달리 하나의 요소 객체에
    대하여 다중 이벤트 할당이 가능함을 확인 가능.
*/

commit_Btn.addEventListener('click', ()=> {
    body.style.backgroundColor = 'yellow';
});