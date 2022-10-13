'use strict';

const car1 = {
    carName: '소나타',
};

const car2 = {
    carName: '아반떼',
};

function viewCarName() {
    console.log(this.carName);
}

viewCarName();

car1.viewCarName = viewCarName;
car2.viewCarName = viewCarName;

car1.viewCarName();
car2.viewCarName();

