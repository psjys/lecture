'use strict';

let service_container = document.querySelector('.sevice_container'),
    service_list = service_container.getElementsByClassName('service_list'),
    btn_collapseAll = service_container.querySelector('.btn_collapseAll');

let openList = service_list[0];

function set_openList () {
    openList.classList.add('hidden');
    openList.childNodes[1].textContent = `+${openList.childNodes[1].textContent.slice(1)}`;

    
}