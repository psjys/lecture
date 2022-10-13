'use strict';

const car = {
    speed: 0,

    accelerate() {
        this.speed++;
        return this;
    },
    break() {
        if (this.speed > 0) this.speed--;
        return this;
    },
    viewSpeed() {
        console.log(this.speed);
        return this;
    }
}

car.
    viewSpeed().
    accelerate().
    accelerate().
    accelerate().
    viewSpeed().
    break().
    break().
    viewSpeed().
    break().
    break().
    viewSpeed();

