// import {useState} from 'react';

// export default function ChangeStateValue2 () {
//     const [stateValue, setStateValue] = useState(10);

//     console.log('ChangeStateValue2');

//     function setValue() {
//         setStateValue(stateValue + 1);
//     }
//     return (
//         <>
//             <button onClick={setValue}>ChangeStateValue2</button>
//             <div>
//                 {stateValue}
//             </div>
//         </>
//     );
// }

// =======================================

// export default function ChangeStateValue2({ syncValue }) {
//     /* 
//     JSX 표현식 블럭{} 은 단독으로 렌더링할 수 없음에 주의.
//     반드시 부모 요소가 있어야 정상적 렌더링 가능.
//     */
//     return (
//         <div> {/* div라는 부모로 감싸야 사용 가능 */}
//             {syncValue}
//         </div>
//     );
// } 

// =======================================

export default function ChangeStateValue2 ({aSyncValue}) {
    return (
        <div>
            {aSyncValue}
        </div>
    );
}