'use strict';

let div = document.querySelectorAll('div'),
    img = document.querySelector('img'),
    id = document.getElementById('main_container');

// 배열로 이미지 html 생성
let div_array = ['1', '2', '3', '4', '5'],
    v = 1,
    x = 0;

for (let i = 0; i < div_array.length; i++) {
    div[1].innerHTML += `<a href="#" class="nationBox nation${i + 1}">${i + 1}</a>`
}

// 이미지 설정
let num = document.querySelectorAll('a');

function imgSlide() {
    img.setAttribute(`src`, `../../../image/${div_array[v]}.jpg`);

    num[v].style.opacity = '1';
    num[x].style.opacity = '.4';

    v++;
    v = v % div_array.length;
    
    x++;
    x = x % div_array.length;
}

// 이미지 자동으로 넘어가기
function clear () {
    let slide = setInterval(imgSlide, 1000);
}

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
