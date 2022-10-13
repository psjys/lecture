'use strict';

let numberOfproperty;
let dynamicObj;

function getObj(numberOfproperty) {
    let tempObj = {}; // 객체
    let key, value;

    for (let i = 0; i < numberOfproperty; i++) {
        key = prompt('객체의 key 입력 : ');
        value = prompt(`${key} :`);

        tempObj[key] = value;
    }
    return tempObj;
}

numberOfproperty = +prompt(`생성하려는 객체의 속성 수를 입력하시오`);
dynamicObj = getObj(numberOfproperty);

for (const key in dynamicObj) {
    document.write(`${key} : ${dynamicObj[key]}<br>`);
}

