// 'use strict'

// let mainContainer = document.getElementById('main_container'),
//     img = mainContainer.getElementsByTagName('img'),
//     nationBox = mainContainer.getElementsByClassName('nationBox'),
//     nationContainer = mainContainer.getElementsByClassName('nation_container');

// // 배열 생성
// let div_array = ['1', '2', '3', '4', '5', 'starbucks'];

// for (let i = 5; i < div_array.length; i++) {
//     nationContainer[0].innerHTML += `<a href="#" class="nationBox nation${i + 1}">${i + 1}</a>`
// }

// // 이미지 클릭
// let opacity = 0;

// function changeImage() {
//     img[0].setAttribute('src', `../../../image/${div_array[this.textContent - 1]}.jpg`);
//     nationBox[opacity].style.opacity = .3;
//     this.style.opacity = 1;
//     opacity = this.textContent - 1;
// }

// for (let i = 0; i < nationBox.length; i++) {
//     nationBox[i].addEventListener('click', changeImage);
// }

'use strict'

let mainContainer = document.getElementById('main_container'),
    img = mainContainer.getElementsByTagName('img'),
    nation_container = mainContainer.getElementsByTagName('div');

let imgAr = ['1', '2', '3', '4', '5', 'starbucks', '강아지'];

for (let i = 5; i < imgAr.length; i++) {
    nation_container[0].innerHTML += `<a href = "#" class = "nationBox nation${i + 1}">${i + 1}</a>`
}

let nationBox = mainContainer.getElementsByClassName('nationBox');

let beforeNation = nationBox[0];

function changeImage() {
    img[0].setAttribute('src', `./image/${imgAr[this.textContent - 1]}.jpg`);
    beforeNation.style.opacity = .3;
    this.style.opacity = 1;
    beforeNation = this;
}

for (let i = 0; i < nationBox.length; i++) {
    nationBox[i].addEventListener('click', changeImage);
}