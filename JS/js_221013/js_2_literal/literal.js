'use strict';

const car = {
    'carName': 'sonata',
    color: 'red',
    carNum: 1,
    'car type': 'sedan',
    5: 'a'
};

console.log(car.carName);
console.log(car.color);
console.log(car.carNum);
console.log(car["car type"]);
console.log(car);
console.log();

console.log(car.fuel);
// console.log(car.run());
console.log('---------------------------');

// console.log(car[color]);
console.log(car['color']);
console.log(car[5]);
const keyColor = 'color';
console.log(car[keyColor]);
console.log('---------------------------');

car.typeOfFuel = 'gasoline';
console.log(car);
console.log('---------------------------');

delete car.carNum;
console.log(car);
console.log('---------------------------');

const key1 = 'father', key2 = 'mother';
const value1 = '아빠', value2 = '엄마';

const family = {
    [key1]: value1,
    [key2]: value2,
};

console.log(family);