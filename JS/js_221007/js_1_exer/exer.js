/*
    < 문제 >

- 아래의 < 조건 > 을 차례대로 고려하여 "세 글자 끝말잇기" 프로그램을 구현하라.
    단어에 포함될 수 있는 공백은 입력받지 않는다 가정하고 한글만 입력받는다 가정하여
    포함공백과 한글 체크는 고려하지 않음.

-------------------------------------------------------------------------------------------------------------

    < 조건 >

1> 프로그램 시작 시 "끝말잇기 Start"라는 경고 대화상자가 열리도록 구현.
2> "처음 한글 세 글자 단어를 입력하세요!!^^" 라는 입력 대화상자가 열리도록 구현.
3> 2> 입력 과정에서 아무 입력없이 "확인" 버튼을 클릭하거나 단어의 글자 수가 맞지 않으면
    "세 글자 단어만 입력하세요~~" 라는 경고 대화상자가 열리도록 한 후 2> 입력 과정이 다시 진행되도록
    구현.
4> 2> 입력 과정에서 "취소" 버튼을 클릭하면 "정말 종료하시겠습니까?" 라는 "확인/취소" 대화
    상자가 열리도록 구현.
5> 4> 과정에서 "확인" 버튼을 클릭하면 "게임 종료!!" 라는 경고 대화상자가 표시된 후 프로그램이 종료
    되도록 구현.
6> 4> 과정에서 "취소" 버튼을 클릭하면 2> 입력 과정이 다시 진행되도록 구현.
7> 2> 입력 과정이 정상적으로 진행되면 "Ok!! 게임시작~~" 이라는 경고 대화상자가 열리도록 구현.
8> "한글 세 글자 단어를 입력하세요!! 종료하려면 "끝"이라고 입력하세요^^(  이전 단어 : 한가위 )"
    라는 입력 대화상자가 실행되도록 구현.
9> 8> 입력 과정에서 정상적인 세 글자 입력이 이루어지면 입력된 단어의 첫 글자와 이전 단어의 끝 글자가
    동일한지 비교하여 동일하면 
    +"Ok!! Excellent!" 라는 경고 대화상자가 열리도록 한 후 다시 8> 입력
    과정이 다시 진행되도록 구현하되, 동일하지 않으면 "입력한 단어의 첫말이 이전 단어의 끝말과 달라요~~ㅠㅠ"
    라는 경고 대화상자가 열린 후 8> 입력 과정이 다시 진행되도록 구현.
10> 8> 입력 과정에서 입력없이 "확인" 버튼을 클릭하거나 단어의 글자 수가 맞지 않으면 3> 과정에 포함된
    "세 글자 단어만 입력하세요~~" 라는 경고 대화상자가 열리도록 한 후 8> 입력 과정이 다시 진행되도록
    구현.
11> 8> 입력 과정에서 "취소" 버튼을 클릭하면 4> 과정에 포함된 "정말 종료하시겠습니까?" 라는 "확인/취소" 대화
    상자가 열리도록 하되 "확인" 버튼을 클릭하면 5> 과정에 포함된 "게임 종료!!" 라는 경고 대화상자가 표시된
    후 프로그램이 종료되도록 구현하고 "취소" 버튼을 클릭하면 8> 입력 과정이 다시 진행되도록 구현.
12> 8> 입력 과정에서 "끝"을 입력하고 "확인" 버튼을 클릭하면 "정말 끝내시겠습니까??" 라는 "확인/취소" 대화
    상자가 열리도록 하되 "확인" 버튼을 클릭하면 "몇 개의 끝말잇기를 성공하셨어요^^" 라는 경고 대화상자가
    열린 후 5> 과정에 포함된 "게임 종료!!" 경고 대화상자가 열린 후 프로그램이 종료되도록 하고 "취소" 버튼을
    클릭하면 8> 입력 과정이 다시 진행되도록 처리.

*/


'use strict';

let word;
word = [];

alert(`끝말잇기 start`);

for (; ;) {
    word[0] = prompt(`처음 한글 세 글자 단어를 입력하세요`);
    if (word[0] == '' || word[0].length !== 3) {
        alert(`세 글자 단어만 입력하세요`);
    }

    alert(`게임 시작`);
    for (; ;) {
        word[i] = prompt(`한글 세 글자 단어를 입력하세요. 종료하려면 '끝' 이라고 입력하세요. (이전 단어 : ${word[i - 1]})`);
        if (word[i-1].lastIndexOf(1) == word[i].indexOf(0)) {
            alert(`ok excellent`);
        }
        if (word[i-1].lastIndexOf(1) !== word[i].indexOf(0)) {
            alert(`입력한 단어의 첫 말이 이전 단어의 끝말과 달라요`);
        }
        if (word[i] == '' || word[i].length !== 3) {
            alert(`세 글자 단어만 입력하세요`);
        }
        if(word[i] == '끝') {
            if(confirm(`정말 종료하시겠습니까?`) {
                alert(`${word[i].length}개의 끝말잇기를 성공하셨어요`);
                break;
            }
        }
    }
} 