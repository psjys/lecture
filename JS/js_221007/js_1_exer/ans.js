'use strict';

let beforeWord, afterWord;
let correctCnt = 0;

alert('끝말잇기 start');


outer: //break, continue 해당
for (; endFlag;) {
    beforeWord = prompt(`처음 한글 세글자 단어를 입력하세요`);

    if (beforeWord === null) {
        if (confirm(`정말 종료하시겠습니까?`)) {
            alert(`게임 종료`);
            break;
        }
    } else if (beforeWord.length === 3) {
        alert(`게임 시작`);
        for (; ;) {
            afterWord = prompt(`한글 세 글자 단어를 입력하세요. 종료하려면 "끝" 이라고 입력하세요 (이전 단어 : ${beforeWord})`)
            if (afterWord === null) {
                if (confirm(`정말 종료하시겠습니까?`)) {
                    alert(`게임 종료`);
                    break outer;
                }
            } else if (afterWord.length === 3) {
                if (afterWord[0] === beforeWord[beforeWord.length - 1]) {
                    correctCnt++;
                    alert(`ok excellent`);
                    beforeWord = afterWord;
                } else {
                    alert(`입력한 단어의 첫 글자가 이전 단어의 끝 글자와 달라요`);
                }
            } else if (afterWord === '끝') {
                if (confirm(`정말 끝내시겠습니까?`)) {
                    alert(`${correctCnt} 개의 끝말잇기를 성공하셨어요`);
                    alert(`게임종료`);
                    break outer;
                }
            } else {
                alert(`세 글자 단어만 입력하세요`);
            }
        }
    } else {
        alert(`세 글자 단어만 입력하세요`)
    }
}


