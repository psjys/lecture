'use strict';

let name1, kor, eng, math, avr, rank;

name1 = prompt(`이름 : `);
kor = +prompt(`국어 점수 : `);
eng = +prompt(`영어 점수 : `);
math = +prompt(`수학 점수 : `);

avr = (kor + eng + math) / 3;

if (avr >= 90) {
    rank = 'A';
} else if (avr >= 80) {
    rank = 'B';
} else if (avr >= 70) {
    rank = 'C';
} else {
    rank = 'F';
}

alert(`<성적>
학생명 : ${name1}, 학점 : ${rank}, 평균 : ${avr}`);