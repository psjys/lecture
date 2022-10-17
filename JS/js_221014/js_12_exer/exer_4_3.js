'use strict';

let imgary, id;
let btn = false;
let k = 1;


let mainContainer = document.getElementById('main_container'),
    img = mainContainer.querySelector('img'),
    nation_container = mainContainer.querySelector('div');

let imgAr = ['1', '2', '3', '4', '5', 'starbucks', '강아지'];

for (let i = 0; i < imgAr.length; i++) {
    nation_container.innerHTML += `<a href = "#" class = "nationBox nation${i + 1}">${i + 1}</a>`
}

let nationBox = mainContainer.getElementsByClassName('nationBox');

let beforeNation = nationBox[0];

function changeImage() {

    id = setInterval(function () {
        img.setAttribute('src', `./image/${imgAr[k % imgAr.length]}.jpg`);

        beforeNation.style.opacity = .3;
        nationBox[k % imgAr.length].style.opacity = 1;
        beforeNation = nationBox[k % imgAr.length];
        k++;
    }, 2000);
}

changeImage();

mainContainer.addEventListener('click', function () {
    btn = !btn;
    if (btn) {
        clearInterval(id);
    } else {
        changeImage();
    }
});