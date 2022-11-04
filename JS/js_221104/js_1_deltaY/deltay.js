/* 
    < deltaY >

-   wheel 이벤트에 종속되는 이벤트 객체로써 세로 스크롤 양을 정수값 형태로 반환.
    wheel 다운은 양수값을 wheel 업은 음수값을 반환. 크롬 기준 1 회 이벤트 발생 시마다
    각각 100, -100 을 반환하나 브라우저 별로 값의 크기는 상이함에 주의.
*/

/* wheel */
/* 
    < wheel 이벤트 > - 구버전 이벤트 : mousewheel( 현재는 사용되지 않음 )

-   마우스 휠을 조작했을 때의 이벤트.
    이벤트의 대상은 일반적으로 window 나 document 가 대상이 되며 스클롤이 생성되는
    다른 요소가 될 수도 있음.
*/

// 마우스 휠 내릴 때 top 100%, 아래 버튼 누를 때 top 100% length 만큼
// 마우스 휠 올릴 때 top 0%, 윗 버튼 누를 때 top 0%


// 'use strict';
// import executable from '../../js_221102/exer/executable.js';

// let btn = document.getElementsByTagName('button'),
//     pageFrame = document.getElementsByClassName('pageFrame'),
//     img = pageFrame[0].getElementsByClassName('img'),
//     page = pageFrame[0].getElementsByClassName('page'),
//     pageContainer = document.querySelector('.page_container');

// let imgFrame = [
//     '../../../image/1.jpg',
//     '../../../image/2.jpg',
//     '../../../image/3.jpg',
//     '../../../image/4.jpg',
// ]

// for (let i = 0; i < imgFrame.length; i++) {
//     img[i].innerHTML += `<img src ="${imgFrame[i]}">`;
// }

// let currentIdx = 0,
//     nextIdx = 0,
//     delay = 1000,
//     delayTime = executable(delay);
    
// btn[0].addEventListener('click', function () {
//     if(delayTime()){
//         if (currentIdx > 0) {
//             page[currentIdx].style.top = '100%';
//             nextIdx--;
//             page[nextIdx].style.top = '0%';
//             currentIdx=nextIdx;
//         }
//     }
// });
    
// btn[1].addEventListener('click', function () {
//     if(delayTime()) {
//         if (currentIdx < imgFrame.length-1) {
//             page[currentIdx].style.top = '-100%';
//             nextIdx++;
//             page[nextIdx].style.top = '0%';
//             currentIdx = nextIdx;
//         }
//     }
// });







//트랜지션 이동 확대해도 적용됨

'use strict';

import executable from '../../js_221102/exer/executable.js';

let page_container = document.querySelector('.page_container'),
    btn = page_container.querySelectorAll('.btn'),
    page = page_container.querySelectorAll('.page'),
    img_div = page_container.getElementsByClassName('img');


for (let i = 0; i < btn.length; i++) {
    btn[i].innerHTML += '<img src="../../image/btn_img.png" alt="">';
}
btn[0].setAttribute('data-value' , '-1');
btn[1].setAttribute('data-value' , '1');

for (let i = 1; i <= img_div.length; i++) {
    img_div[i-1].innerHTML += `<img src="../../image/im${i}.jpg" alt="">`
}

let nextPage = 0,
    currentPage = 0;

const DELAYTIME = 1000,
      confirmActionable = executable(DELAYTIME);


// page_container.addEventListener('click', (e) => {
//     let btn = e.target.closest('button'),
//         count = btn.dataset.value;

//     if(btn) {
//         page[currentPage].style.top = `${-count * 100}%`;
//         nextPage += count;
//         page[nextPage].style.top = '0%'
//         currentPage = nextPage;
     
//     }


// });


btn[0].addEventListener('click', () => {
    if(confirmActionable()) {
        if (currentPage >=1){
            page[currentPage].style.top = '100%';
            nextPage--;
            page[nextPage].style.top = '0%';
            currentPage = nextPage;
        }
    }
});

btn[1].addEventListener('click', () => {
    if(confirmActionable()) {
        if (currentPage <= 2) {
            page[currentPage].style.top = '-100%';
            nextPage++;
            page[nextPage].style.top = '0%';
            currentPage = nextPage;
        }
    }

});

document.addEventListener('wheel', (e) => {
    if(confirmActionable()) {
        let offset = +e.deltaY;
        if(offset == '100') {
            if (currentPage <= 2) {
                console.log(offset);
                page[currentPage].style.top = `${-offset}%`;
                nextPage++;
                page[nextPage].style.top = '0%';
                currentPage = nextPage;
            }
        } else {
            if (currentPage >=1){
                console.log(offset);
                page[currentPage].style.top = `${-offset}%`;
                nextPage--;
                page[nextPage].style.top = '0%';
                currentPage = nextPage;
            }
        }
    }
});


























//트랜지션 이동 확대해도 적용됨

// let page_container = document.querySelector('.page_container'),
//     btn = page_container.querySelectorAll('.btn'),
//     page = page_container.querySelectorAll('.page'),
//     img_div = page_container.getElementsByClassName('img');


// for (let i = 0; i < btn.length; i++) {
//     btn[i].innerHTML += '<img src="../../image/btn_img.png" alt="">';
// }
// btn[0].setAttribute('data-value' , '-1');
// btn[1].setAttribute('data-value' , '1');

// for (let i = 1; i <= img_div.length; i++) {
//     img_div[i-1].innerHTML += `<img src="../../image/im${i}.jpg" alt="">`
// }

// let nextPage = 0,
//     currentPage = 0;


// // page_container.addEventListener('click', (e) => {
// //     let btn = e.target.closest('button'),
// //         count = btn.dataset.value;

// //     if(btn) {
// //         page[currentPage].style.top = `${-count * 100}%`;
// //         nextPage += count;
// //         page[nextPage].style.top = '0%'
// //         currentPage = nextPage;
// //     }


// // });


// btn[0].addEventListener('click', () => {
//     if (currentPage >=1){
//         page[currentPage].style.top = '100%';
//         nextPage--;
//         page[nextPage].style.top = '0%';
//         currentPage = nextPage;
//     }

// });

// btn[1].addEventListener('click', () => {
//     if (currentPage <= 2) {
//         page[currentPage].style.top = '-100%';
//         nextPage++;
//         page[nextPage].style.top = '0%';
//         currentPage = nextPage;
//     }

// });

// document.addEventListener('wheel', (e) => {
//     let offset = +e.deltaY;
//     if(offset == '100') {
//         if (currentPage <= 2) {
//             page[currentPage].style.top = `${-offset}%`;
//             nextPage++;
//             page[nextPage].style.top = '0%';
//             currentPage = nextPage;
//         }
//     } else {
//         if (currentPage >=1){
//             console.log('test2');
//             page[currentPage].style.top = `${offset}%`;
//             nextPage--;
//             page[nextPage].style.top = '0%';
//             currentPage = nextPage;
//         }
//     }
// });