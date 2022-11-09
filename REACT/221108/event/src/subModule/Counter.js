// function Counter({ spanStyle, btnStyle }) {

//     /* 
//     동기 - 로직 순서대로 (코딩 순서대로) 처리되는것 
//     비동기 - 이벤트처럼 이벤트가 발생 했을 때만 실행되는 것 
        
//     < 동기값 >

//     -   리액트에서 동기변수에 할당된 값은 순차적인 로직에 의한 변경만 가능.
//         따라서 아래의 동기변수에 할당된 값은 이벤트 발생과 같은 비동기적
//         상황에 의한 변경 불가.
//     */
//     let count = 0;      // 동기변수.

//     return (
//         <>
//             <div>COUNTER
//                 <span style={spanStyle}>{count}</span>
//             </div>
//             <button style={btnStyle} onClick={() => ++count}>+1</button>  {/* 동기값은 변화가 안됨 */}
//             <button style={btnStyle} onClick={() => ++count}>-1</button>
//         </>
//     );
// }

// export default Counter;




//=====================================================================
// 관례상 set으로 시작하는 변수명 씀
// count++ : 기존 상태값을 변경하는 것으로 적용됨

/* 
    useState 생성자 함수를 사용하기 위한 임포트 필수.
*/
import { useState } from 'react';

/*
    < Hook >

- 비동기적 처리를 위한 고리를 생성한다는 개념.
*/

/*
    
    리액트에서는 이벤트 발생에 따른 비동기 처리시 컴포넌트에 구현한 값의 변경을 위해서는
    별도의 비동기값(상태값)이 필요.
    이러한 비동기값(상태값)의 생성을 위해서는 useState 함수를 이용해야 하며, 지정된 변수는
    set~ 함수를 통해서만 값의 변경이 가능. ( set~ 형식은 관례상 표기 )
    함수(객체) 내에 일반적으로 정의된 지역변수는 그 특성상 값을 유지하지 못하고 함수 외부의
    전역 변수 또한 각 컴포넌트의 개별 고유값이 아니므로 함수 내에서 변경한다 하더라도
    변경되지 않음.

형식    :       const [ 변수명, set_함수 ] = useState(초기값);

set_함수 : set 함수의 명칭은 변수명 앞에 관례상 접두사 set 을 지정하는 것이 일반적.
초기값 : 변수에 최초에 지정할 디폴트 값.
*/
function Counter({ spanStyle, btnStyle }) {

    /* 
        useState 함수는 변수에 할당된 값과 변경 함수를 배열 형태로 반환.
        따라서 구조분해 할당(Destructuring Assignment)을 통한 초기화가 일반적.
    */
    const stateAr = useState(0),
        count = stateAr[0],
        setCount = stateAr[1];

    // const [count, setCount] = useState(0);       // 구조분해 할당

    return (
        <>
            <div>COUNTER
                <span style={spanStyle}>{count}</span>
            </div>

            {/*
                setCount 함수의 실인수 전달을 통한 비동기값(count)의 변경.
                        상태값의 업데이트는 항상 새로운 값으로 덮어쓰는 것이지, 기존 상태값 자체를
                        변경하는 것은 불가.
            */}
            {/* <button style={btnStyle} onClick={() => setCount(count + 1)}>+1</button>
            <button style={btnStyle} onClick={() => setCount(count - 1)}>-1</button> */}

            {/*
                setCount 함수에 익명 객체의 참조를 전달하되 이에 대한 임의 매개변수를 지정함으로써,
                콜백 호출을 통해 전달받은 매개변수에서 읽어들인 비동기값(count)을 이용하여 가공하고
                가공한 그 결과값을 반환받아 비동기값을 업데이트하는 방식. 
                ( 컴포넌트 최적화를 위한 목적으로 사용 )
            */}
            <button style={btnStyle} onClick={() => setCount((c) => c + 1)}>+1</button>
            <button style={btnStyle} onClick={() => setCount((c) => c - 1)}>-1</button>
        </>
    );
}

export default Counter;