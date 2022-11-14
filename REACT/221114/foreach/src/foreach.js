'use strict';

let student1 = ['홍길동', '박성연', '강감찬', '간디', '이순신', '김태풍'];

/*
    Array.forEach( callbackfn: ( value?: string, index: number, array: string[] ) => void, thisArg?: any ): void

- 배열의 요소를 순차적으로 순회하면서 전달받은 콜백함수를 내부적으로 호출.
  forEach 메서드는 크기가 할당되더라도 초기화되지 않은 상태에서는 자동 순회되지 않음에 주의.

- value : forEach메서드 내에서 배열의 각 요소를 순차적으로 순회할 시마다 콜백호출을 하면서 배열의 요소값을 인자로 받음.
- index : forEach메서드 내에서 배열의 각 요소를 순차적으로 순회할 시마다 콜백호출을 하면서 배열 인덱스를 인자로 받음.
- array : forEach메서드 내에서 배열의 각 요소를 순차적으로 순회할 시마다 콜백호출을 하면서 배열 전체 참조를 인자로 받음.

- void : undefined를 반한함을 의미.
- thisArg : 콜백실행 시 각 요소에 대한 this 로 사용되는 값.


※ forEach 메서드도 for~of 문과 마찬가지로 콜백함수로 전달되는 value인자는 배열의 요소값을 복사한 값이므로 value인자를 통한
  배열에 직접 쓰기는 불가. 단, 배열의 참조를 통한 인덱스(index) 인자를 통한 쓰기는 당연히 가능.
*/
let ct = 0;

student1.forEach(function () {
  console.log(ct++);
});
console.log('---------------')


student1.forEach(function (v) {
  console.log(v);
});
console.log('---------------')


student1.forEach(function (v, i) {
  console.log(`${i} : ${v}`);
});
console.log('---------------')


student1.forEach(function (v, i, ar) {
  console.log(ar);
});
console.log('---------------')


// 람다식(Arrow function) 적용.
student1.forEach((v, i) => console.log(`${i} : ${v}`));
console.log('---------------')


// forEach의 내부 구조. 실제는 객체의 내부 메서드로 구현되지만 간략한 표현을 위해 함수로 구현. ( array와 thisArg는 생략 )
function forEach2(callbackfn) {
  for (let i = 0; i < student1.length; i++) {
    callbackfn(student1[i], i);                 // js에서는 실인수가 형식인수 보다 많은 경우, 남는 실인수에 대한 참조만 불가할뿐
  }                                             // 문법적으로 문제가 되지 않는 특성을 활용.
}

forEach2((v, i) => console.log(`${i} : ${v}`));
console.log();
forEach2((v) => console.log(`${v}`));               // 실인수가 형식인수 보다 많지만 남는 실인수 i가 문제가 되지는 않음.

console.log('---------------');


student1.forEach((v, i) => v = i);      // forEach 는 for ~ of 와 동일하게 읽는 것만 가능.
//                                      // 또한 반환 값이 undefined 임에 주의.

for (const s of student1) {             // for ~ of 는 배열만 대상이 되는 반면, forEach 는 반복 가능한 Iterable 객체에 모두 적용 가능.
  console.log(s);
}

console.log('---------------');

student1.forEach((v, i, ar) => ar[i] += '님');  // 배열 자체의 참조를 통한 원본 변경은 가능.

for (const s of student1) {
  console.log(s);
}

