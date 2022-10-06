/*
    < 문제 >

- 학생명과 국어, 영어, 수학 점수를 순서대로 입력받아 평균을 구하여 출력하는 프로그램 구현.
    단, 순서대로 정보를 입력받는 과정에서 어느 하나라도 값이 입력되지 않는 경우에는 다음 입력
    과정으로의 진행을 멈추고 "학생 정보가 순서대로 정확히 입력되지 않았습니다." 문구를 대화상자
    형태로 표시하고 프로그램이 종료되도록 구현.
*/
'use strict';

let name;
let kor;
let math;
let eng;

if (name = prompt(`학생명 : `)) {
    if (kor = +prompt(`국어 : `)) {
        if (eng = +prompt(`영어 : `)) {
            if (math = +prompt(`수학 : `)) {
                alert(`${name} 학생의 국어, 영어, 수학 점수의 평균 : ${(kor + math + eng)/3}`);
            }
        }
    }
} 
if (!math) {
    alert(`학생 정보가 순서대로 정확히 입력되지 않았습니다`);
}



(name = prompt(`이름 :`)) 
    && (kor = +prompt(`국어 :`))
    && (eng = +prompt(`영어 :`))
    && (math = +prompt(`수학 :`))
    && alert(`${stName} 학생의 국어, 영어, 수학 점수의 평균 : ${(kor + eng + math) / 3}`);

math || alert('학생 정보가 순서대로 정확히 입력되지 않았습니다');