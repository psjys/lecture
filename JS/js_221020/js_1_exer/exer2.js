let body = document.querySelector('body');
let button = body.querySelectorAll('button');
let ul = body.querySelector('ul');

let num = 0;

body.addEventListener('click', function (e) {
    if (e.target == button[1]) {
        num -= 100;
        ul.style.left = `${num}%`;
    }

    if (e.target == button[0]) {
        num += 100;
        ul.style.left = `${num}%`;
    }

    if (num == -400) {
        button[1].classList.add('hidden');
    } else if (num == 0) {
        button[0].classList.remove('visible');
    } else {
        button[1].classList.remove('hidden');
        button[0].classList.add('visible');
    }
});

// button[1].addEventListener('mouseenter', () => {
//     button[1].classList.add('opacity');
// });

// button[1].addEventListener('mouseleave', () => {
//     button[1].classList.remove('opacity');
// });

// button[0].addEventListener('mouseenter', () => {
//     button[0].classList.add('opacity');
// });

// button[0].addEventListener('mouseleave', () => {
//     button[0].classList.remove('opacity');
// });


