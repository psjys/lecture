'use strict';

const car = {
    carName: 'sonata',
    color: 'red',
    carNum: 1,
    'car type': 'sedan',
};

function getProperty1(obj, property) {
    console.log(obj.property);              // obj에 property라는 key가 존재하지 않으므로 undefined 반환.
}

getProperty1(car, 'carName');
console.log();


function getProperty2(obj, property) {
    console.log(obj[property]);             // 계산된 프로퍼티를 활용하여 값을 동적으로 얻는 것이 가능.
}

getProperty2(car, 'carName');