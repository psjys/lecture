'use strict';

let serviceContainer = document.getElementsByClassName('service_container'),
    serviceHeader = serviceContainer[0].getElementsByClassName('service_header'),
    serviceBody = serviceContainer[0].getElementsByClassName('service_body'),
    ul = serviceContainer[0].getElementsByTagName('ul');


let beforeBox = serviceBody[0].parentNode;     // service body의 부모가 li고 li를 이용해서 hidden 해야하니까

ul[0].addEventListener('click', function (e) {
    if (e.target.parentNode.classList[1] == 'hidden') {
        beforeBox.classList.add('hidden');
        e.target.parentNode.classList.remove('hidden');
        beforeBox.children[0].textContent = beforeBox.children[0].textContent.replace ('-', '+');
        e.target.textContent = e.target.textContent.replace ('+', '-');
        beforeBox = e.target.parentNode;
    }
});


let btn = serviceContainer[0].getElementsByClassName('btn_collapseAll'),
    list = serviceContainer[0].getElementsByClassName('service_list');

btn[0].addEventListener ('click', function () {
    beforeBox.children[0].textContent = beforeBox.children[0].textContent.replace ('-', '+');
    beforeBox.classList.add('hidden');
});

/*
    이벤트 위임은 동일한 동작 할 때 써먹어야함
    버튼 눌렀을 때 직전 요소를 없애주는거랑 똑같음
    모듈화~~~~
    클로짓 - 해당 지정요소를 계속 쫓아서 윗 계층으로 올라가는 것
    
*/