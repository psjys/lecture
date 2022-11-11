import { useState } from 'react';

export default function Exer() {
    // 입력값 변수
    const [inputName, setInputName] = useState(''),
        [inputNum, setInputNum] = useState('');
    

    // 출력값 변수
    const [nameValue, setnameValue] = useState(''),
        [numValue, setnumValue] = useState('');

    function customer(e) {
        if (e.target.placeholder == '이름을 입력하세요') {
            setInputName(e.target.value);
        } else {
            setInputNum(e.target.value);
        }
    }

    // 엔터 키 함수
    function checkEnter(e) {
        if (e.key === 'Enter') {
            confirm();
        }
    }

    // 버튼 함수
    function confirm() {
        setnameValue(inputName);
        setnumValue(inputNum);
    }

    function tryagain() {
        setInputName('');
        setInputNum('');
    }

    return (
        <>
            <div>
                <div>
                    <label>고객명
                        <input type="text" placeholder="이름을 입력하세요"
                            onChange={customer}
                            onKeyDown={checkEnter}
                            value={inputName} />
                    </label>
                    <label>고객번호
                        <input type="text" placeholder="고객번호를 입력하세요"
                            onChange={customer}
                            onKeyDown={checkEnter}
                            value={inputNum} />
                    </label>
                    <button onClick={confirm}>확인완료</button>
                    <button onClick={tryagain}>다시입력</button>
                </div>
            </div>
            <div>
                {nameValue} 고객님의 고객번호는 {numValue} 입니다.
            </div>
        </>
    );
}
