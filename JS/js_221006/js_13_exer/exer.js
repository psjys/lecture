'use strict';

let name, kor, eng, math;
let sum = 0;

const subject = ['국어 점수', '영어 점수', '수학 점수'];
const score = [];

name = prompt(`학생 명 :`);
for (let i = 0; i < subject.length; i++) {
    score[i] = +prompt(`${subject[i]}`);
    sum += score[i];

    if(score[i] > 100 || score[i] < 0 ) {
        alert(`0부터 100 까지 입력`);
        break;
    }
}


let avr = sum / subject.length;
let result = Math.trunc(avr);

document.write(`<table>`);
document.write(`<caption> < ${name} 학생의 성적 > </caption>`);
for (let i = 0; i < subject.length; i++) {
    document.write(`
        <tr>
            <th>${subject[i]}</th>
            <td>${score[i]}점</td>
        </tr>
        `)
}

document.write(`<tr>
            <th>합계</th>
            <td>${sum}점</td>
        </tr>`);
document.write(`<tr>
            <th>평균</th>
            <td>${result}점</td>
        </tr>`);
document.write(`</table >`);