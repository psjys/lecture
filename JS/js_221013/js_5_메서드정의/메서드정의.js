'use strict';

const option = {
    hiPass: true,
    sunRoof: false
}

const car = {
    carName: 'poter',
    color: 'blue',
    typeOfFuel: 'diesel',
    'car type': 'truck',
    performance: {
        speed: 100,
        breakCapability: 10
    },
    carOption: option,
    inforCar: function () {
        console.log(`차명 : ${this.carName}, 색상 : ${this.color}, 종류 : ${this["car type"]}`)
    },
    run() {
        console.log("부릉부릉");
    }
};

console.log(car.performance.speed);
console.log(car.performance.breakCapability);
console.log("하이패스" + ((car.carOption.hiPass) ? "" : "미") + "장착");
console.log("선루프" + ((car.carOption.sunRoof) ? "" : "미") + "설치");
console.log(car);
console.log('-----------------');

car.inforCar();
car.run();
console.log('-----------------');

function convey() {
    console.log('짐을 실어 나르기');
}

car.stop = function () {
    console.log('끼이익');
};

car.convey = convey;
car.stop();
car.convey();
car['convey']();
console.log('----------------------');

