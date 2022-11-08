// export function TestReact() {
//   return <h1>모듈 임포트1</h1>;
// }

// export function TestReact2() {
//   return <h2>모듈 임포트2</h2>;
// }


//=================================================================
// /* 
//     export 시 default 지정자를 지정함으로써 해당 모듈에서 하나의 객체만 외부로
//     추출함을 명시적으로 표현하고 이에 따라 import 시 객체참조에 지정에 대한
//     블럭{} 생략 가능.
//     또한 이경우 export 클래스명이나 함수명은 import 시의 객체참조명과 다르거나
//     생략해도 무방.
//     즉, default 지정자 지정 시에는 익명함수 형태의 객체로 내보내기가 가능하며
//     import 시 객체명은 임의로 지정 가능.
//     단, 혼란을 방지하기 위해 이경우 모듈명과 동일한 객체참조명을 사용하는
//     것이 바람직.
// */
// export default function App() {
//   return <h1>모듈 임포트1</h1>;
// }

// // export default function Appss() {
// //     return <h1>모듈 임포트1</h1>;
// // }

// // export default function () {
// //     return <h1>모듈 임포트1</h1>;
// // }


//=================================================================

// // export { TestReact, TestReact2 };
// // export default App;

// function App() {
//   return <h1>모듈 임포트1</h1>;
// }

// function TestReact() {
//   return <h1>모듈 임포트2</h1>;
// }

// function TestReact2() {
//   return <h2>모듈 임포트3</h2>;
// }

// /* 
//   export 구문은 아래와 같이 별도로 선언이 가능하며, 선언 위치는 상관이 없음.
//   또한 여러개의 컴포넌트를 동시에 export 하는 경우에는 표현식 블럭{} 을
//   이용하여 객체 형태로 컴포넌트들을 나열함으로써 한꺼번에 export 가능.
// */
// export { TestReact, TestReact2 };
// export default App;

//=================================================================

// function TestReact() {
//   return <h1>모듈 임포트1</h1>;
// }

// function TestReact2() {
//   return <h2>모듈 임포트2</h2>;
// }

// export { TestReact, TestReact2 };


//=================================================================

// function TestReact() {
//   return <h1>모듈 임포트1</h1>;
// }

// function TestReact2() {
//   return <h2>모듈 임포트2</h2>;
// }

// /* 
//   export 구문 또한 as 적용 가능.
//   또한 export 구문에서 as 적용후, import 구문에서도 as 적용 가능.
// */
// export { TestReact as First, TestReact2 as Second};

//=================================================================

// function App() {
//   return <h1>모듈 임포트1</h1>;
// }

// function TestReact() {
//   return <h1>모듈 임포트2</h1>;
// }

// function TestReact2() {
//   return <h2>모듈 임포트3</h2>;
// }

// /* 
//   export 시에는 * 적용 불가.
// */
// export { App, TestReact, TestReact2 };


//=================================================================

// import Hello from './Hello';

// function App() {
//     return (
//         /* 
//         태그 컴포넌트에 임의 사용자정의 프로퍼티와 값을 지정함으로써 해당 컴포넌트에
//         객체 형태로 전달되고, 이를 매개변수(props)의 참조를 통해 태그 컴포넌트에 명시한
//         프로퍼티명 그대로 멤버연산자(.)를 통해 필드와 동일한 형태로 참조 가능.
//         */
//         <Hello students="학생여러분!!" />

//     );
// }

// export default App;

//======================================================================

// import Hello from './Hello';

// function App() {
//   return (
//     <Hello students="학생여러분!!" color="blue" />
//   );
// }

// export default App;


//======================================================================

// import Hello from './Hello';

// function App() {
//   return (
//     <>
//       <Hello students="학생여러분!!" color="blue" />
//       <Hello students="선생님!!" />
//       <Hello />
//     </>
//   );
// }

// export default App;

//======================================================================

// import Parent from "./Parent";

// function App() {
//   return (
//     <Parent parentName="박성연"/>
//   );
// }

// export default App;

//======================================================================
// import Parent from "./Parent";
// import Son from "./Son";

// function App() {

//   /* 
//       컴포넌트 태그 간 계층 구조 구현.
//   */
//   return (
//     <Parent parentName="박성연" >
//       <Son sonName="홍길동" />
//     </Parent>
//   );
// }

// export default App;

//======================================================================

import './App.css';

/* 
  < 이미지 임포트 >

- 이미지 임포트시 리액트의 public 폴더내에 이미지 파일들을 구성하면
  별도의 임포트 과정 필요없이 문자열 형태의 경로 설정이 직접 가능.
  설정 경로는 src 폴더내 index.js 파일 계층과 동일한 위치로 인정되어
  지정 가능.
*/
function App() {
  return (
    <div id="main_container">
        <img src="./image/1.jpg" alt="img"/>

        <div className="nation_container"></div>
    </div>
  );
}

export default App;