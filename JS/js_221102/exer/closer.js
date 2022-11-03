// closer

function test() {
    let n = 5;

    return function () {
        return n++;
    }
    // 내부 함수는 외부 함수를 참조 가능
}

const output = test();

console.log(output()); // 5 출력하고 나서 증감식이니까
console.log(output()); // 6 
console.log(output()); // 7 

const output2 = test(); // 새로운 객체가 다시 만들어짐

console.log(output2()); // 5
console.log(output2()); // 6
console.log(output2()); // 7

