'use strict';

let link = document.getElementsByTagName('li');

function setBackgroundYellow() {
    console.log(this);              // undefined 를 반환하니까 안됨
    this.style.backgroundColor = 'yellow';
}

for (let i = 0; i < link.length; i++) {
    link[i].addEventListener('click', function () { // 여기서 this 쓰면 function이 빈 객체이므로 undefined
        setBackgroundYellow();
    });
}

/*
    < this 를 매개변수로 전달 >
*/
function setBackgroundYellow(self) {
    self.style.backgroundColor = 'yellow';
}

for (let i = 0; i < link.length; i++) {
    link[i].addEventListener('click', function () {
        setBackgroundYellow(this);
    });
}

/* =================================================================================== */

/*
   < 함수의 참조 전달을 통한 함수의 객체화 >

- 익명객체를 익명함수나 람다식 형태로 전달하여 addEventListener 메서드 내에서 콜백호출을
  처리하는 것과 같이 js 에서는 함수를 하나의 객체로 인식함으로써 함수의 참조만 전달함으로써
  동일한 콜백호출 처리 결과를 도출 가능.
  이는 함수의 참조를 통해 직접 함수의 본체와 연동시킴으로써 객체화된 함수 내에서의 this 는
  익명객체와 동일한 이벤트 발생 객체 자신을 의미.
  따라서 이때의 함수의 매개변수 지정은 익명함수나 람다식의 매개변수와 동일한 이벤트 객체를
  반환.

*/
function setBackgroundYellow() {
    this.style.backgroundColor = 'yellow';
    // console.log(e.target);  // 내가 클릭한 요소가 지정됨 (a 태그 & h3)
    // console.log(this);      // 밑에 link[i] 가 li / this 쓰면 li 가 걸림
}

for (let i = 0; i < link.length; i++) {
    link[i].addEventListener('click', setBackgroundYellow);
}