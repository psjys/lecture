'use strict';

let slide_list = document.querySelector('.slide_list');

let imgAr = [
    '../../../image/1.jpg',
    '../../../image/2.jpg',
    '../../../image/3.jpg',
    '../../../image/4.jpg',
    '../../../image/5.jpg',
];

// for (let i = 0; i < imgAr.length; i++) {
//     ul.innerHTML += '<li></li>';
// }

// let li = ul.querySelectorAll('li');

for (let i = 0; i < imgAr.length; i++) {
    slide_list.appendChild(document.createElement('li')).style.background = `url(${imgAr[i]}) center / 100% 100% no-repeat`;
}

/* 
    < createElement >

- 인수로 지정한 태그명에 해당하는 태그 요소를 생성하여 반환.
    단, 생성 시의 요소는 모두 독립적인 개별요소가 반환됨에 따라 재활용이 되지 않음에 주의.


    < appendChild >

- 지정한 부모 요소에 인수로 전달한 요소를 부모 요소의 마지막 자식 요소로 추가후
    추가된 자식 요소의 참조를 반환. 
  */


//============================================================================

const imgList = slide_list.getElementsByTagName('li');

let num = 0;

setInterval(() => {
    imgList[num].style.left = '100%';
    imgList[num].style.opacity = 0;
    
    num++;
    num = num % imgAr.length;
    
    imgList[num].style.left = '0px';
    imgList[num].style.opacity = 1;

}, 2000);