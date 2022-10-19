'use strict';

const box1 = document.getElementsByClassName('box');

/* 
    < offsetWidth, offsetHeight >

- 마진을 제외한 보더, 패딩, 컨텐트(스크롤바를 포함하는 컨텐트 너비)를 포함하는 너비와 높이.
    즉, 브라우저 개발자도구에서 측정되는 요소의 너비와 높이.
*/

console.log(box1[0].offsetWidth);
console.log(box1[0].offsetHeight);
console.log('=========================');

/* 
    < clientWidth, clientHeight >

- offsetWidth, offsetHeight 에서 보더를 제외한 안쪽 영역의 너비와 높이.
    단, offsetWidth, offsetHeight 달리 스크롤바는 미포함.
*/

console.log(box1[0].clientWidth);
console.log(box1[0].clientHeight);
console.log('=========================');

/* 
< scrollWidth, scrollHeight >

- clientWidh, clientHeight 와 측정 영역이 동일하나 스크롤바에
의해 보이지 않는 요소의 영역도 측정이 되는 차이점.
*/

console.log(box1[0].scrollWidth);
console.log(box1[0].scrollHeight);
console.log('=========================');

/* 
< scrollLeft, scrollTop >

- 스크롤된 문서의 너비나 높이 값(스크롤 량)이 px 단위로 반환되며
다른 기하 프로퍼티와 달리 변경도 가능.
단, 변경 시 기본 단위가 px 로 지정되어 있어 px 단위 명기 불가함에
따라 문자열 형태의 값이 아닌 바로 숫자 형식으로 지정.
*/

box1[0].addEventListener('click',function() {
    console.log(this.scrollLeft);
    console.log(this.scrollTop);
    console.log('=========================');
});

const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    box1[0].scrollTop += 500;
});