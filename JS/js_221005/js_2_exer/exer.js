/* 
    < 문제 >

- 입력받은 값이 숫자인지 아닌지를 평가하는 프로그램 구현.
  숫자 입력 시 입력없이 "확인" 버튼을 누르거나 "취소" 버튼을 누르는
  상황에 대한 예외 처리는 제외.
*/
'use strict';

let n;

for (; ;) {

    n = prompt(`숫자 입력 :`);

    if (confirm(`입력된 값이 숫자가 맞습니까?`)) {
        if (isNaN(n)) {
            alert(`입력된 값이 숫자가 아닌거 같습니다. 프로그램을 종료합니다`);
        } else {
            alert(`입력된 값이 숫자가 맞습니다`);
        }
        break;
    }
    alert(`이후 반복문을 학습한 후에는 재입력 상태를 구현가능할 것 입니다.`);
}