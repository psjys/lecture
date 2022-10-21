'use strict';

let main = document.querySelector('.main'),
    a = main.querySelectorAll('a'),
    ul = main.querySelector('ul'),
    img = ul.querySelectorAll('img')


let num = 0;

let startTime = -new Date();

main.addEventListener('click', function (e) {
    let eventOj = e.target.closest('a')

    if (this.contains(eventOj)) {

        let endTime = new Date();

        if ((endTime - startTime) > 1000) {
            if (eventOj == a[1]) {
                num--;
            }

            if (eventOj == a[0]) {
                num++;
            }
            ul.style.left = `${num * 100}%`;

            startTime = endTime;
        }

        if (num == (-img.length + 1)) {
            a[1].classList.add('hidden');
        } else if (num == 0) {
            a[0].classList.remove('visible');
        } else {
            a[1].classList.remove('hidden');
            a[0].classList.add('visible');
        }
    }

});
