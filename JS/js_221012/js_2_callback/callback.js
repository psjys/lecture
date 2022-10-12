'use strict';

function agree() {
    alert(`개인정보 활용에 동의하셨습니다`);
}

function disagree() {
    alert(`개인정보 활용에 동의하지 않았습니다. 다시 확인 부탁드립니다.`);
}

function inputCheck1() {
    if (confirm(`개인정보 활용에 동의하십니까?`)) {
        agree();
    } else {
        disagree();
    }
}
inputCheck1();

function inputCheck2(ok, no) {
    if (confirm(`개인정보 활용에 동의하십니까?`)) {
        ok();
    } else {
        no();
    }
}

inputCheck2(agree, disagree);

inputCheck2(
    function () { alert(`개인정보 활용에 동의하셨습니다`); },
    function () { alert(`개인정보 활용에 동의하지 않았습니다. 다시 확인 부탁드립니다`); }
);

