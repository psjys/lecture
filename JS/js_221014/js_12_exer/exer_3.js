'use strict';

let div = document.querySelectorAll('div'),
    img = document.querySelector('img');


let div_array = ['1', '2', '3', '4', '5'];

for (let i = 0; i < div_array.length; i++) {
    div[1].innerHTML += `<a href="#" class="nationBox nation${i+1}">${i+1}</a>`
}

let num = document.querySelectorAll('a');

for (let i = 0; i < num.length; i++) {
    num[i].addEventListener('click', function () {
        img.setAttribute(`src`, `../../../image/${div_array[i]}.jpg`)
        for (let j = 0; j < num.length; j++) {
            num[j].style.opacity = '0.4';
        }
        if (num[i].textContent == `${i + 1}`) {
            num[i].style.opacity = '1';
        }
    });
}
