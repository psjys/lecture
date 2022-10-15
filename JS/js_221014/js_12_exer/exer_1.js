'use strict';

let img = document.querySelector('img'),
    num = document.querySelectorAll('a');

for (let i = 0; i < num.length; i++) {
    num[i].addEventListener('click', function () {
        img.setAttribute(`src`, `../../../image/${i + 1}.jpg`)
        for (let j = 0; j < num.length; j++) {
            num[j].style.opacity = '0.4';
        }
        if (num[i].textContent == `${i + 1}`) {
            num[i].style.opacity = '1';
        }
    });
}


