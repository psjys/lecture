import { useState } from "react";

export default function ChangeStateValue({ transValue }) {
    const [stateValue, setStateValue] = useState(5);

    function setValue() {
        /* 
            함수 내에서 setStateValue 와 transValue 함수의 실행 순서에
            관계없이 상태값 변환 함수(setStateValue)가 다른 실행문 보다
            가장 최후에 실행되는 것을 확인 가능.
            따라서 실행 순서에 주의.
        */
        setStateValue(stateValue + 1);

        console.log(stateValue);

        transValue(stateValue);
    }

    /* 
        실제 배치 순서는 상관이 없지만 직관적인 동기화를 맞추기 위해서는
        set~ 함수를 무조건 가장 뒤에 배치하는 것이 논리적 이해가 편리.
    */
    // function setValue() {
    //     let value = stateValue + 1;

    //     transValue(value);
    //     setStateValue(value);
    // }

    return (
        <>
            <button onClick={setValue}>ChangeStateValue</button>
            <div>
                {stateValue}
            </div>
        </>
    );
}