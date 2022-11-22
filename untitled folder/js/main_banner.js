'use strict';

let mainBanner = document.querySelector('.main-banner'),
    button = mainBanner.querySelectorAll('.mainButton');

// 메인 배너
let imgArr = [
    'image/banner3.png',
    'image/banner1.jpg',
    'image/banner2.jpg',
    'image/banner4.jpg',
];

for (let i = 0; i < imgArr.length; i++) {
    mainBanner.innerHTML += `<li><img src="${imgArr[i]}" alt="banner" class="banner"></li>`;
}

let beforeIdx = 0,
    i = 0,
    slide_list_li = mainBanner.querySelectorAll('li');

function slideImg() {
    slide_list_li[i].style.left = `0`;
    // 이미지 슬라이드
    if (beforeIdx > i) {
        slide_list_li[beforeIdx].style.left = '100%';
    }
    else if (beforeIdx < i) {
        slide_list_li[beforeIdx].style.left = '-100%';
    }

    slide_list_li[i].classList.remove('nonVisible');
    slide_list_li[beforeIdx].classList.add('nonVisible');
    slide_list_li[(i + 1) % slide_list_li.length].style.left = '100%';

    beforeIdx = i;
}

// 자동 슬라이드 
let slide;
function autoSlide() {
    slide = setInterval(function () {
        i = ++i % slide_list_li.length;
        slideImg();
    }, 1500);
}

autoSlide();

mainBanner.addEventListener('mouseenter', () => {
    clearInterval(slide);
});

mainBanner.addEventListener('mouseleave', () => {
    autoSlide();
});



// let nationBox = mainContainer.getElementsByClassName('nationBox');

// let beforeNation = nationBox[0];

// function changeImage() {
//     img.src = imgAr[beforeNation.textContent % imgAr.length];
//     nationBox[beforeNation.textContent % imgAr.length].style.opacity = 1;
//     beforeNation = nationBox[beforeNation.textContent % imgAr.length];
// }

// let btn = true,
//     interval;

// function slide() {
//     interval = setInterval(changeImage, 1000);
// }
// slide();

// function stop() {
//     clearInterval(interval);
// }
