'use strict';

const student = [
    '홍길동',
    '박성연',
    '강감찬',
    '간디',
    '박명수',
];


/*
    Array.map(callbackfn: (value: T, index: number, array: T[]) => T, thisArg?: any): T[]

-   배열을 순차적으로 순회하면서 배열의 각 요소에 대해 콜백함수(predicate)를 호출하여 각 요소를 가공하여 원본 배열에 사상(Mapping)
    되는 새로운 배열을 반환.
    map 메서드는 크기가 할당되더라도 초기화되지 않은 상태에서는 자동 순회되지 않음에 주의.
*/

let client = student.map(v => v + '님');
console.log(client);

client = student.map(v =>           // map 메서드는 원본 배열의 각 요소에 대하여 익명 객체의 반환값을 이용해
    v + '님'                         // 1:1 매핑된 새로운 배열의 참조를 반환받는 형식을 취하므로 당행과 같은 블럭{}
);                                   // 내에서는 명시적 return 을 하지 않으면 undefined 로 매핑된 배열이 반환됨에 주의.
console.log(client);
console.log('-------------------');
