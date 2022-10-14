/* 
    < 문제 >

1) 리터럴 객체 family 생성.

2) 최초 객체 초기화.
    father: '파더',
    mother: '머더',
    son: '손',
    brother: null,
    sister: null,

3) outputFamily 메서드는 객체 내부에 구성.

4) initSibling 메서드는 객체 외부 함수로 정의하되
    객체 내부에서 참조를 통해 정의.

5) 외부함수와 객체 정의후 실행 코드는 아래로 제한.

    family.outputFamily();
    console.log();

    family.initSibling('브러더', '씨스터');
    family.outputFamily();


6) 출력 결과는 아래와 동일하게 출력되도록 구현.

    아빠 : 파더
    엄마 : 머더
    아들 : 손
    형 : 없음
    누나 : 없음

    아빠 : 파더
    엄마 : 머더
    아들 : 손
    형 : 브러더
    누나 : 씨스터
*/


'use strict';

function initSibling(brother, sister) {
    this.brother = brother;
    this.sister = sister;
}

const family = {
    father: '파더',
    mother: '머더',
    son: '손',
    brother: null,
    sister: null,
    outputFamily() {
        console.log(`형 : ${this.brother || '없음'}`)
        console.log(`누나 : ${this.sister || '없음'}`)
    },
    initSibling,
}



family.outputFamily();
console.log();

family.initSibling('브러더', '씨스터');
family.outputFamily();
