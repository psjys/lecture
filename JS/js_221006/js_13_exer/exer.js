'use strict';

let name, kor, eng, math;
let sum = 0;

let subject = [
    ['학생 명', '국어 점수', '영어 점수', '수학 점수', '합계', '평균'],
];
subject[1] = new Array(subject[0].length);
subject[1][subject[1].length - 2] = 0;

for (let i = 0; i < subject[0].length - 2; i++) {
    subject[1][i] = prompt(subject[0][i]);
    if (i > 0) {
        subject[1][subject[0].length - 2] += +subject[1][i];
    }
}
subject[1][subject[1].length - 1] = Math.trunc(subject[1][subject[1].length - 2] / (subject[1].length - 3));


document.write(`<table>`);
document.write(`<caption> < ${subject[1][0]} 학생의 성적 > </caption>`);
for (let i = 1; i < subject[0].length; i++) {
    document.write(`
        <tr>
        <th>${subject[0][i]}</th>
        <td>${subject[1][i]}점</td>
        </tr>
        `)
}
document.write(`</table>`);