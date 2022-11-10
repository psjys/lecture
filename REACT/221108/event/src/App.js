// import Event1 from "./subModule/Event1";
// import Event2 from "./subModule/Event2";

// function App() {
//   const style = {
//     backgroundColor: 'red',
//     color: 'white',
//     fontSize: '3em',
//     textDecoration: 'none',
//     marginBottom: '10px',
//   }

//   return (
//     <>
//       <Event1 style={style} />
// //       <Event2 style={style} />
// //     </>
// //   );
// // }

// // export default App;

// import Counter from "./subModule/Counter";

// function App() {
//     const spanStyle = {
//       // 동기 값
//         display: 'inline-block',
//         margin: '20px 20px',
//         color: 'blue',
//         fontWeight: 'bold',
//         fontSize: '2em',

//     },
//         btnStyle = {
//             marginRight: '40px',
//         };

//     return (
//         <Counter spanStyle={spanStyle} btnStyle={btnStyle} />
//     );
// }

// export default App;

// import { useState } from 'react';
// import SetName from './subModule/SetName';

// /* 
//     < 하위 컴포넌트에서 상위 컴포넌트로 값 전달 >

// -   하위 컴포넌트에서 상위 컴포넌트로 값을 전달하기 위해서는 상위 컴포넌트에서
//     정의한 함수의 참조를 하위 컴포넌트에 전달하고, 하위 컴포넌트에서 상위
//     컴포넌트로 전달할 값을 상위 컴포넌트의 함수 참조를 통해 실인수와 함께 호출
//     함으로써 상위 컴포넌트에서는 매개변수 형태로 전달된 값을 수신하고 이를
//     set~ 함수를 이용 상태값에 저장하여 활용.
// */
// function App() {
//     const [yourName, seㅇtYourName] = useState('');

//     /* 
//         하위 컴포넌트에서 전달된 값을 매개변수 형태로 수신하기 위한 함수.        
//     */
//     function setName(transName) {
//         setYourName(transName);
//     }

//     return (
//         <>
//             <SetName setName={setName} />
//             <div>당신의 이름은 {yourName}입니다.</div>
//         </>
//     );
// }

// export default App;


//================================================
// import {useState} from 'react';
// import SetName from './subModule/SetName';

// function App () {
//     const [yourName, setYourName] = useState('박성연');

//     return (
//         <>
//                         {/*이거는 키     {밸류} 이 키에 {밸류}를 넣어준다는 뜻 */}           
//             <SetName setYourName={setYourName} />
//             <div>당신의 이름은 {yourName} 입니다.</div>
//         </>
//     )
// }

// export default App;

//================================================


// import ChangeStateValue from "./subModule/ChangeStateValue";

// function App() {
//     return (
//         <ChangeStateValue />
//     );
// }

// export default App;

//================================================

// import ChangeStateValue from './subModule/ChangeStateValue';
// import ChangeStateValue2 from './subModule/ChangeStateValue2';

// function App () {
//     console.log ('App');

//     return (
//         <>
//             <ChangeStateValue />
//             <ChangeStateValue2 />
//         </>
//     );
// }

// export default App;


//================================================

// import ChangeStateValue from './subModule/ChangeStateValue';
// import ChangeStateValue2 from './subModule/ChangeStateValue2';

// function App () {
//     let syncValue = 0;
//     /* 
//         하위 컴포넌트(ChangeStateValue)로 부터 전달된 값을 상위 컴포넌트의
//         동기값(syncValue)에 전달을 하면 재렌더링이 되지 않아, 동기값에 대한
//         변화를 기대할 수 없으며 다른 하위 컴포넌트에 대한 전달도 불가.
//         비동기로 해야 변화함

//         하위 -> 상위 일 때 : 
//     */
//     function transValue (value) {
//         syncValue = value;
//     }

//     return (
//         <> {/* 빈 태그 부모로 감싸야 사용 가능 */}
//             <ChangeStateValue transValue={transValue} />
//             <ChangeStateValue2 syncValue={syncValue}/>
//             {syncValue} {/* 빈 태그 부모로 감싸야 사용 가능 */}
//         </>
//     );
// }

// export default App;

//================================================

// import ChangeStateValue from "./subModule/ChangeStateValue";
// import ChangeStateValue2 from "./subModule/ChangeStateValue2";
// import { useState } from 'react';

// function App() {
//     const [asyncValue, setAsyncValue] = useState(0);
//         /* 
//         컴포넌트간 통신에서 상위에서 하위 컴포넌트에 데이터를 전달할 때에는
//         props 를 통해 참조 전달이 되므로 하위 컴포넌트에서는 별도의 동기나
//         비동기 변수의 선언없이 바로 재렌더링 적용 가능.
//         반면, 하위에서 상위 컴포넌트로 데이터 전달시에는 상위 컴포넌트 함수의
//         참조를 통한 호출로 매개변수 형태의 지역변수로 전달되므로 상위 컴포넌트
//         에서 이를 재렌더링 하기 위해서는 재렌더링이 수반되는 비동기 변수에
//         할당하는 작업이 반드시 필요.
//         즉, 컴포넌트간 통신을 위해서는 상위에서 하위인지 또는 하위에서 상위인지
//         방향에 따라 비동기 변수의 필요성이 가변적.
//     */
//     function transValue(value) {
//         setAsyncValue(value);
//     }
//     return (
//         <>
//             <ChangeStateValue transValue={transValue} />
//             <ChangeStateValue2 asyncValue={asyncValue} />
//         </>
//     );
// }

// export default App;


// 221110
//================================================

import InputClient from "./subModule/InputClient";

function App () {
    return (
        <InputClient />
    );
}

export default App; 