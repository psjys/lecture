'use strict'

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
    img.setAttribute('src', `./image/${imgAr[this.textContent - 1]}.jpg`);
    beforeNation.style.opacity = .3;
    this.style.opacity = 1;
    beforeNation = this;
}

for (let i = 0; i < nationBox.length; i++) {
    nationBox[i].addEventListener('click', changeImage);
}