import { useState } from 'react';

export default function Exer2() {
    const [clientInfo, setClientInfo] = useState({
        inputName: '',
        inputNum: '',
        nameValue: '',
        numValue: '',
    });

    function customer(e) {
        const eventOj = e.target;

        if (eventOj.name === 'inputName') {
            setClientInfo({
                ...clientInfo,
                clientNameValue : eventOj.value,
            });
        } else {
            setClientInfo({
                ...clientInfo,
                clientNameValue : eventOj.value,
            });
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
        setClientInfo({
            ...clientInfo,
            inputName: clientInfo.nameValue,
        });
        setClientInfo({
            ...clientInfo,
            inputNum: clientInfo.numValue,
        });
    }

    function tryagain() {
        setClientInfo({
            ...clientInfo,
            nameValue: '',
            inputNum: '',
        });
    }

    return (
        <>
            <div>
                <div>
                    <label>고객명
                        <input name='inputName'
                            type="text" placeholder="이름을 입력하세요"
                            onChange={customer}
                            onKeyDown={checkEnter}
                            value={clientInfo.nameValue} />
                    </label>
                    <label>고객번호
                        <input name='inputNum'
                            type="text" placeholder="고객번호를 입력하세요"
                            onChange={customer}
                            onKeyDown={checkEnter}
                            value={clientInfo.numValue} />
                    </label>
                    <button onClick={confirm}>확인완료</button>
                    <button onClick={tryagain}>다시입력</button>
                </div>
            </div>
            <div>
                {clientInfo.inputName} 고객님의 고객번호는 {clientInfo.inputNum} 입니다.
            </div>
        </>
    );
}