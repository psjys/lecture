'use strict';

let div = document.querySelectorAll('div'),
    img = document.querySelector('img'),
    id = document.getElementById('main_container');

// 배열로 이미지 html 생성
let div_array = ['1', '2', '3', '4', '5'];

for (let i = 0; i < div_array.length; i++) {
    div[1].innerHTML += `<a href="#" class="nationBox nation${i + 1}">${i + 1}</a>`
}

// 이미지 설정
let num = document.querySelectorAll('a');

function imgSlide() {
    for (let i = 0; i < div_array.length; i++) {
        img.setAttribute(`src`, `../../../image/${div_array[i]}.jpg`);
        for (let j = 0; j < div_array.length; j++) {
            num[j].style.opacity = '0.4';
        }
        if (num[i].textContent == `${i + 1}`) {
            num[i].style.opacity = '1';
        }
    }
}
// 이미지 자동으로 넘어가기
let slide = setInterval(imgSlide, 1000);

// 클릭 중단 설정
let click = true;

id.onclick = function () {
    if (click) {
        // 반복 중단
        clearInterval(slide);
        click = false;

    } else {
        // 반복 재개
        slide = setInterval(imgSlide, 1000);
        click = true;
    }
}
