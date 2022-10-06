'use strict';

let name, kor, eng, math;
let sum = kor + eng + math;
let avr = (kor + eng + math) / 3;

// name = prompt(`학생 명 :`);
// kor = +prompt(`국어 점수 :`);
// eng = +prompt(`영어 점수 :`);
// math = +prompt(`수학 점수 :`);

document.write(`
    <caption><${name}학생의 성적></caption>
    <table id='table'>
        <tr>
            <th>국어점수</th>
            <td>${kor}점</td>
        </tr>
        <tr>
            <th>영어점수</th>
            <td>${eng}점</td>
        </tr>
        <tr>
            <th>수학점수</th>
            <td>${math}점</td>
        </tr>
        <tr>
            <th>합계</th>
            <td>${sum}점</td>
        </tr>
        <tr>
            <th>평균</th>
            <td>${avr}점</td>
        </tr>
    </table>
`)