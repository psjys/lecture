// import {useState} from 'react';

// export default function InputClient() {
//     const [inputValue, setInputValue] = useState(""); // 입력값
//     function onChangeInput (e) {
//         setInputValue (e.target.value);
//     }
//     return (
//         <>
//             <div>
//                 <label>고객명
//                     <input type="text" onChange={onChangeInput} />
//                 </label>
//             </div>
//             <div>
//                 {inputValue} 고객님 안녕하세요
//             </div>
//         </>
//     );
// }

// import {useState} from 'react';

// export default function InputClient() {
//     const [inputValue, setInputValue] = useState(''); //입력값
//     const clientName = inputValue; //비동기 setInputValue로 계속 바꾸고 렌더링 되는 변수
//         // 그냥 동기 변수 - 대입하면 비동기 변수처럼 변경할수있다

//     function onChangeInput (e) {
//         setInputValue(e.target.value);
//     }
//     return (
//         <>
//             <div>
//                 <label>고객명
//                     <input type="text" onChange={onChangeInput} />
//                 </label>
//             </div>
//             <div>
//                 {clientName} 고객님 안녕하세요
//             </div>
//         </>
//     );
// }


//===============================================================


// import { useState } from "react";

// /* 
//     이전 예문까지는 입력값과 출력값에 대한 동기적 상황을 가정했지만,
//     당 예문에서부터는 입력값과 출력값에 대한 비동기적 상황을 가정.
//     즉, 입력을 했을 때 바로 출력되는 것이 아니라 입력후 "확인완료"
//     버튼을 클릭해야만 출력되는 상황을 가정.
// */

// // 출력에 대한 별도 state 값이 필요 - input state값을 출력 state 값에 덮어야함
// export default function InputClient() {
//     const [inputValue, setInputValue] = useState(''), // 입력값.
//         [clientName, setclientName] = useState(''); // 입력 확인을 했을 때의 출력값.

//     function onChangeInput(e) {
//         setInputValue(e.target.value);
//     }

//     /* 
//         < "확인완료" onClick 이벤트 >

//     -   확인완료 버튼을 클릭했을 때 입력값 변수(inpuValue)의 값을 출력값 변수(clientName)에 할당.
//         입력값과 출력값이 동기가 되면 안되므로 별도의 상태값 변수(clientName)를 생성해 "확인완료"
//         버튼을 클릭했을 때만 입력 상태값이 출력 상태값에 전달되도록 구현.
//     */
//     function confirm() {
//         setclientName(inputValue);
//     }

//     return (
//         <>
//             <div>
//                 <div>
//                     <label>고객명
//                         <input
//                             type="text"
//                             onChange={onChangeInput}
//                         />
//                     </label>
//                     <button onClick={confirm}>확인완료</button>
//                 </div>
//                 <div>
//                     {clientName} 고객님 안녕하세요
//                 </div>
//             </div>
//         </>
//     );
// }

//===============================================================

// import { useState } from 'react';

// export default function InputClient() {
//     const
//         // [inputValue, setInputValue] = useState(''), //입력값
//         [clientName, setClientName] = useState('');
//     // let inputValue; // 이거는 undefined라서 value가 없는걸로 인식함 
//     let inputValue = ''; // 

//     function onChangeInput(e) {
//         // setInputValue(e.target.value);
//         inputValue = (e.target.value);
//     }
//     function confirm() {
//         setClientName(inputValue);
//     }
//     /*
//         < "다시입력" onClick 이벤트 >

//     -   "다시입력" 버튼을 클릭했을 때 입력값 변수(inpuValue)에 빈 문자열 할당.
//         하기의 이벤트 처리로 입력상태값(inputValue)은 초기화 되어 출력상태값(clientName)에
//         전달함으로써 "확인완료" 버튼을 클리했을 때 빈 문자열로 변환되어 출력되는 것을 확인
//         가능.
//         하지만 입력상태값에만 초기화된 것 뿐이지 input 상자는 초기화되지 않아 값이 그대로
//         남아 있는 것을 확인 가능.
//     */
//     function tryagain() {
//         // setInputValue('');
//         inputValue = ('');
//     }
//     return (
//         <>
//             <div>
//                 <div>
//                     <label>고객명
//                         <input type="text" onChange={onChangeInput} value={inputValue} />
//                     </label>
//                     <button onClick={confirm}>확인완료</button>
//                     <button onClick={tryagain}>다시입력</button>
//                 </div>
//                 <div>
//                     {clientName}고객님 안녕하세요
//                 </div>
//             </div>
//         </>
//     );
// }

//===============================================================

import {useState} from 'react';

export default function InputClient () {
    const [inputValue, setInputValue] = useState(''),
        [clientName, setclientName] = useState('');

        function onChangeInput (e) {
            setInputValue(e.target.value);
        }
    /*
            < onKeyDown >

    -   키를 눌렀을 때의 이벤트.
        해당 요소에 대한 이벤트 객체를 통해 keyCode 나 key 필드를 반환 가능.

    keyCode : 해당 키에 대한 정수형태의 유니코드값을 반환.
    key : 해당 키에 대응되는 문자열 형식의 키값을 반환하며, 해당 키가
            특수키인 경우 해당 예약 키워드값 반환.

    ==========================================================================

        < onKeyDown 이벤트에 대한 콜백 함수 >

    -   임의 키가 눌렸을 때 해당 키값이 엔터(Enter) 키로 감지되면 해당
        요소(input 태그)의 value 값을 반환받아 출력값 변수(clientName)에 할당.
    */
    function checkEnter(e) {
        if(e.keyCode === 13) {
            setclientName(e.target.value);
        }

        if(e.key === 'Enter') {
            setclientName(e.target.value);
        }
    }
    function confirm () {
        setclientName (inputValue);
    }
    function tryagain () {
        setInputValue('');
    }
    return (
        <>
            <div>
                <div>
                    <label>고객명
                        <input type="text" 
                                value= {inputValue}
                                onChange = {onChangeInput}
                                onKeyDown = {checkEnter}
                        />
                    </label>
                    <button onClick={confirm}>확인완료</button>
                    <button onClick={tryagain}>다시입력</button>
                </div>
                <div>
                    {clientName} 고객님 안녕하세요
                </div>
            </div>
        </>
    );
}
