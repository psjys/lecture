'use strict';

let mainContainer = document.getElementById('main_container'),
    img = mainContainer.querySelector('img'),
    nation_container = mainContainer.querySelector('div');

let imgAr = ['../../../image/1.jpg',
    '../../../image/2.jpg',
    '../../../image/3.jpg',
    '../../../image/4.jpg',
    '../../../image/5.jpg',
    '../../../image/starbucks.jpg'];

for (let i = 0; i < imgAr.length; i++) {
    nation_container.innerHTML += `<a href = "#" class = "nationBox nation${i + 1}">${i + 1}</a>`
}

let nationBox = mainContainer.getElementsByClassName('nationBox');

let beforeNation = nationBox[0];

function changeImage() {
    img.src = imgAr[beforeNation.textContent % imgAr.length];
    beforeNation.style.opacity = .4;
    nationBox[beforeNation.textContent % imgAr.length].style.opacity = 1;
    beforeNation = nationBox[beforeNation.textContent % imgAr.length];
}

let btn = true,
    interval;

function slide() {
    interval = setInterval(changeImage, 1000);
}
slide();

function stop() {
    clearInterval(interval);
}

mainContainer.addEventListener('click', function () {
    if (btn) {
        stop();
    } else {
        slide();
    }
    btn = !btn;
});

