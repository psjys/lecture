/*
엔터 없이 버튼 눌렀을 때 명단 추가
추가하면 계속 추가됨
비어있는 상태에서는 생성안되게
*/

// import { useState } from 'react';

// export default function List() {
//     const [inputName, setinputName] = useState(''),
//         [workerArray, setworkerArray] = useState([]),
//         name;

//     // 배열에 값 저장 해서 출력 어떻게 하지? 헤헤
//     // let workerArray = [...inputName, name];

//     function workerList() {
//         for (let i = 0; i < workerArray.length; i++) {
//             setinputName(inputName);
//         }
//     }

//     // 명단추가 버튼
//     function confirm() {
//         setinputName(inputName);
//     }

//     return (
//         <>
//             <div>
//                 <label>직원명단
//                     {/* 여기다 명단 뜨게 하기 */}
//                     <div onChange={setworkerArray[...workerArray, name]}></div>
//                     <input type="text" />
//                 </label>
//                 <button onClick={confirm}>명단추가</button>
//             </div>
//         </>
//     );
// }

import { useState } from "react";
import Name from "./Name";

function NameList() {
    const [name, setName] = useState('');
    const [nameList, setNameList] = useState([]);

    function onChangeInput(e) {
        setName(e.target.value);
    }

    function onClickButton() {
        if (name) {
            setNameList([...nameList, (<Name key={`${name}-${nameList.length}`}>{name}</Name>)]);
            setName('');
        }
    }

    return (
        <>
            <p>&lt; 직원 명단 &gt;</p>
            {nameList}
            <input
                style={{ marginTop: '20px' }}
                type="text"
                onChange={onChangeInput}
                value={name}
            />
            <button onClick={onClickButton}>명단 추가</button>
        </>
    );
}

export default NameList;