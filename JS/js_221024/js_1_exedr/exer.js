'use strict';

let ul = document.querySelector('.slide_list');

let imgAr = [
    '../../../image/1.jpg',
    '../../../image/2.jpg',
    '../../../image/3.jpg',
    '../../../image/4.jpg',
    '../../../image/5.jpg',
];

for (let i = 0; i < imgAr.length; i++) {
    ul.innerHTML += '<li></li>';
}

let li = ul.querySelectorAll('li');

for (let i = 0; i < imgAr.length; i++) {
    li[i].style.background = `url(${imgAr[i]}) center / 100% 100% no-repeat`;
}

//============================================================================

let num = 0;

let slide = setInterval(() => {
    li[num].style.left = '100%';
    li[num].style.zIndex = '0';
    li[num].classList.remove('opacity');

    num++;
    num = num % imgAr.length;

    li[num].style.left = '0px';
    li[num].style.zIndex = '1';
    li[num].classList.add('opacity');

}, 2000);