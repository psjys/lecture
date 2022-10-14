'use strict';

let nav = document.getElementById('nav'),
    menu = document.getElementsByClassName('menu'),
    li = document.getElementsByTagName('li'),
    paragraph = document.querySelector('div>p'),
    paragraphAll = document.querySelectorAll('div p');

    nav.style.backgroundColor = 'burlywood';
    menu[2].style.fontSize = '30px';
    li[1].style.listStyle = 'none';
    paragraph.style.color = 'red';
    paragraphAll[1].style.color = 'blue';
    
    let inputTag = document.getElementsByTagName('input');
    console.log(inputTag[0].value);
    // if (inputTag[0].value == '다음') {
    //     inputTag[0].value = 'Next';
    // }
    
    console.log(menu[1].textContent);
    // if (menu[1].textContent == '카페') {
    //     menu[1].textContent = 'Cafe';
    // }
    
    console.log(li[1].innerHTML);
    // li[1].innerHTML = '<h3><a href="#" class="menu cafe">다락방</a></h3>';
    
    
    /*
        < length >
    
    - 배열의 크기를 반환하는 필드.
    */
    // for (let i = 0; i < paragraphAll.length; i++) {
    //     paragraphAll[i].style.opacity = '.3';
    // }