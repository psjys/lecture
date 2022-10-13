'use strict';

let calculator = {
    init(n1, n2) {
        this.n1 = n1;               // 객체에 별도의 프로퍼티 선언 없이도 메서드를 통해 프로퍼티의 생성 및 초기화 가능.
        this.n2 = n2;               // 이 때 메서드를 통해 전달받은 매개변수와 객체의 변수를 동일하게 지정하는 경우,
        //                          // 매개변수와 객체의 프로퍼티를 구분하기 위해 this 를 활용.
    },

    // sum() {
    //    return this.n1 + this.n2;   // 객체 내에서 함수형 메서드의 this 는 객체 자기 자신을 가리키지만
    // },                              // 화살표 함수형 메서드의 this 는 빈 객체를 반환함에 유의.

    // mul() {
    //    return this.n1 * this.n2;
    // },

    sum: () => this.n1 + this.n2,    // 당행에서의 this는 빈 객체를 반환하므로 빈 객체의 필드(n1, n2)들을 참조하므로
    // undefined 간 연산이 되어 'NaN' 반환.

    mul: () => this.n1 * this.n2
};

calculator.init(5, 3);
console.log(calculator.sum());
console.log(calculator.mul());