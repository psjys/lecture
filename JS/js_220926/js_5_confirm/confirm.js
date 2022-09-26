'use strict';

const id = 'hsy1';

for (let inputId; ;) {
    inputId = prompt('아이디 입력');

    if (confirm('아이디가 정확합니까?')) {
        if (inputId === id) {
            alert('입력한 아이디가 정확히 일치합니다.');
            break;
        } else {
            alert('아이디가 일치하지 않습니다. 재입력 바랍니다');
        }
    }
}

close();