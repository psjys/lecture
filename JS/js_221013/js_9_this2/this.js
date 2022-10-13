'use strict';
function testFunc() {
    console.log(this);  // 일반 함수는 객체 할당 받기 전 this 호출하면 undefined 반환
}

const testArrow = () => {
    console.log(this); // 람다식은 내부적으로 익명 개체 생성하므로 빈 객체 반환
}

testFunc();
testArrow();

const car1 = {
    carName: '소나타',
    viewCarName() {
        function output() {
            console.log(this.carName);
        }
        output();
    },
}

// car1.viewCarName();

const car2 = {
    carName: '아반떼',
    viewCarName: () => console.log(this.carName),
    viewCarName() {
        const output = () => console.log(this.carName);
        output();
    },
}
car2.viewCarName();

// 함수 내에서의 람다식은 빈 객체 반환하지 않고 상승