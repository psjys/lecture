'use strict'

let mainContainer = document.getElementById('main_container'),
    img = mainContainer.getElementsByTagName('img'),
    nationBox = mainContainer.getElementsByClassName('nationBox');

let opacity = 0;

function changeImage() {
    img[0].setAttribute('src', `../../../image/${this.textContent}.jpg`);
    nationBox[opacity].style.opacity = .3;
    this.style.opacity = 1;
    opacity = this.textContent - 1;
}

for (let i = 0; i < nationBox.length; i++) {
    nationBox[i].addEventListener('click', changeImage);
}

