'use strict';

let body = document.querySelector('body'),
    input = document.querySelectorAll('input');

input[0].onclick = function () {
    body.style.backgroundColor = 'black';
}

input[1].onclick = () => {
    body.style.backgroundColor = 'white';
}

// ===============================================================================

// input[0].onclick = function () {
//     body.style.color = 'yellow';
// }

// input[1].onclick = () => {
//     body.style.color = 'black';
// }