'use strict';

document.addEventListener('DOMContentLoaded', () => {
    let btt = document.querySelector('#go-top');
    // document.documentElement.scrollTop
    // window.pageYOffset
    let scrollAmt;
    window.addEventListener('scroll', ()=> {
        scrollAmt = window.pageYOffset;
        if(scrollAmt > 300) {
            // btt.classList.add('active');
            btt.className = 'active';
        } else {
            btt.classList.remove ('active');
        }
    }); // scroll event

    btt.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top : 0,
            left : 0,
            behavior : 'smooth'
        });
    })
});

