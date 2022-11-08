// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';                    // 스타일 지정을 위한 CSS 경로 지정을 통한 파일 임포트 필요.
// //                                       // 최상위 계층에서만 임포트하면 해당 하위 계층의 모듈에 모두 적용.
// // import React from 'react';

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//     /* 
//         < JSX >

//     - js 에서 리액트 프레임을 이용하여 HTML 형식을 구현하기 위해 별도의 메서드나 도구의 도움없이
//       HTML 과 거의 유사한 형태로 표현하여 요소등을 구현할 수 있는 문법 형식.
//     */
//     <h1>테스트 리액트1</h1>

//     // 테스트 리액트2           // 렌더링할 다중 JSX 요소는 반드시 아래 예시와 같이 반드시 하나의
//     //                          // 부모요소가 감싸는 형태로 구현해야함에 주의.
// );

// /* ============================================================================================ */

// root.render(
//     <div>
//         <h1>테스트 리액트1</h1>
//         테스트 리액트2
//         <h2>테스트 리액트3</h2>
//     </div>
// );

// /* ============================================================================================ */

// /* 
//     < Fragment >

// - JSX 의 다중 요소들을 감싸기 위한 불필요한 부모요소의 추가를 막기 위한 대체 도구로써 이름이 없는
//   태크 형식을 취하여 DOM 에 실제 요소가 할당되지 않은 상태로 구현되는 것을 확인 가능.
// */
// root.render(
//     <>
//         <h1>테스트 리액트1</h1>
//         테스트 리액트2
//         <h2>테스트 리액트3</h2>
//     </>
// );

// /* ============================================================================================ */

// /* 
//     < 닫는 태그가 없는 태그 >

// - 리액트의 JSX 는 XML 문법이 엄격히 적용되어 닫는 태그가 없는 태그의 경우 반드시 태그명 뒤에
//   '/' 구분자를 적용해야함에 주의.
// */
// root.render(
//     <>
//         테스트 리액트1<br/>
//         테스트 리액트2
//     </>
// );

// /* ============================================================================================ */

// /* 
//     < 주석 >

// - JSX 의 주석은 블럭{} 내에 다중 주석 처리 형식을 취하여 지정.
// */
// root.render(
//     <>
//         <h1>테스트 리액트1</h1>
//         {/* 테스트 리액트2 */}
//         <h2>테스트 리액트3</h2>
//     </>
// );

// /* ============================================================================================ */

// /* 
//     < 변수나 함수를 이용한 동적 JSX 의 삽입 >

// - 리액트에서는 JSX 자체를 하나의 객체로 인식하여 참조를 반환함으로써
//   변수나 함수를 통해 전달 가능하며, JSX 내에서도 블럭{}을 이용하여
//   표현식을 적용 가능.
//   단, 표현식은 구문형식이 불가함에 주의.
// */

// const h3_Tag = <h3>테스트 리액트3</h3>;     // JSX 형식을 직접 변수에 할당 가능.

// function return_h4_Tag() {
//     return <h4>테스트 리액트4</h4>;         // JSX 형식을 함수를 통해 반환 받는 것도 가능.
// }

// const reactTxt = '리액트';

// root.render(
//     <>
//         <h1>테스트 리액트1</h1>
//         <h2>테스트 리액트2</h2>
//         {h3_Tag}                           {/* 표현식 블럭{} 내에 요소들의 참조나 값을 전달하여 활용 가능 */}
//         {return_h4_Tag()}
//         <h5>테스트 {reactTxt}5</h5>
//     </>
// );

// /* ============================================================================================ */

// /* 
//     < JSX 형식 태그의 인라인 스타일 지정  >

// - 객체 형식으로 지정해야 하며, js 에서의 css 퍼로퍼티명 적용시와 마찬가지로 '-' 이 없는
//   대문자 연결자 형식으로 지정해야 함에 주의.
// */

// function setStyle() {
//     return {
//         fontSize: '3em',
//         textDecoration: 'underline',
//     };
// }

// root.render(
//     <>
//         <h1 style={{ color: 'red', backgroundColor: 'yellow' }}>테스트 리액트1</h1>
//         <h2 style={setStyle()}>테스트 리액트2</h2>
//     </>
// );

// /* ============================================================================================ */

// /* 
//     < JSX 형식 태그의 클래스 지정  >

// - JSX 에서의 클래스 지정은 "class" 가 아닌 "className" 형식으로 지정해야 함에 주의.
//   페이지에는 "class" 지정에 따른 스타일 적용이 되지만, 개발자 도구에서 경고가 발생함을 확인 가능.
//   단, 를래스 지정은 컴포넌트 태그에는 직접 지정 불가함에 주의.
// */
// root.render(
//     <>
//         <h1 className="redColor">테스트 리액트1</h1>
//         <h2 className="redColor">테스트 리액트2</h2>
//         {/* <h1 class="redColor">테스트 리액트1</h1>
//         <h2 class="redColor">테스트 리액트2</h2> */}
//     </>
// );

// /* ============================================================================================ */

// /* 
//    < JSX 에서의 undefined, null, false 등의 렌더링 >

// - JSX 에서의 undefined, null, false 등의 값을 렌더링시에는 아무것도 표시되지 않음.
// */


// import ReactDOM from 'react-dom/client';

// const root = ReactDOM.createRoot(document.getElementById('root'));

// /* 
//     < 컴포넌트(Component) > - 객체 지향에서 나온 개념

// - JSX 형식으로 구성된 HTML 요소들을 함수 또는 클래스 형태로 그룹핑함으로써 효율적 렌더링
//   수행을 위한 리액트의 요소.
//   컴포넌트는 관례상 대문자로 시작하며 XML 과 같이 태그의 컨텐트가 존재하지 않는 경우에는
//   닫는 태그없는 형식으로 지정. 이때 반드시 태그명 뒤에는 구분자 "/" 가 와야함에 주의.
// */
// function TestReact() {
//     return <h1>테스트 리액트</h1>;
// }

// /*
//     < 리액트 렌더 형식1 >

// - 정의된 함수 호출을 통해 JSX 형식으로 구성된 요소들을 반환받아 render 메서드의 인수로
//   전달함으로써 화면상에 구현.
// */
// root.render(
//     TestReact()
// );

// /*
//     < 리액트 렌더 형식2 >

// - XML 형식의 태그 형식으로 함수를 호출함으로써 상기와 동일한 실행 결과를 확인 가능.
// */
// // root.render(
// //     <TestReact />
// // );



// ======================================================================

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import TestReact from './testReact';        // 모듈화 컴포넌트의 경로 임포트.
// import TestReact2 from './testReact2';

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//     <>
//         {/* 모듈화된 컴포넌트 호출을 통한 렌더링 요소를 할당. */}
//         <TestReact />
//         <TestReact2 />
//     </>
// );


//======================================================================

// import React from 'react';
// import ReactDOM from 'react-dom/client';

// /* 
//     < 모듈(파일)에서 다중 객체를 로드하는 경우의 import 형식 >

//     import { 객체참조1, 객체참조2, ...} from 문자열 형태의 모듈 경로명


// ※ 경로명은 현재 경로를 의미하는 "./" 의 생략이 불가하며 로드 파일이 js 파일인
//   경우 확장자 js 는 생략 가능.
//   export 모듈의 클래스명 또는 함수명이 import 시 객체참조명과 동일해야 함에 주의.

// */
// import { TestReact, TestReact2 } from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//     // 컴포넌트 태그명의 이니셜은 대문자로하는 것이 원칙.
//     <>
//         <TestReact />
//         <TestReact2 />
//     </>
// );



//======================================================================

// import React from 'react';
// import ReactDOM from 'react-dom/client';

// /* 
//     < 모듈에서 하나의 객체만 로드하는 경우의 import 형식 >

// - 모듈의 객체참조명에 대한 블럭{} 생략 가능.
//   단, 이는 모듈에서 객체 export 시 default 지정자를 지정한 경우만 가능.
//   또한 임포트 객체명(App)을 모듈의 디폴트 함수나 클래스명과 다르게
//   적용하여도 무방.
// */
// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
  //   <App />
  // );
  
  
  //======================================================================

// import React from 'react';
// import ReactDOM from 'react-dom/client';

// /* 
//     하나의 모듈에서 다중 컴포넌트를 한꺼번에 임포트시 표현식 블럭{} 을
//     이용하여 객체 형태로 나열함으로써 다중 컴포넌트에 대한 임포트가 가능.
//     단, default 컴포넌트는 아래와 같이 객체 형태가 아닌 별도로 임포트해야
//     함에 주의.
// */
// import App, { TestReact, TestReact2 } from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//     <>
//         <App />
//         <TestReact />
//         <TestReact2 />
//     </>
// );

//======================================================================

// import React from 'react';
// import ReactDOM from 'react-dom/client';

// /* 
//     < import 시 as 를 이용한 컴포넌트명 변경 >

// 형식    :       import 실제컴포넌트명 as 변경컴포넌트명

// - 변경컴포넌트명 또한 반드시 대문자로 시작해야함에 주의.
//   단, default 컴포넌트에 대해서는 as 적용 불가.
// */
// import { TestReact as First, TestReact2 as Second } from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//     <>
//         <First />
//         <Second />
//     </>
// );

//======================================================================
// import React from 'react';
// import ReactDOM from 'react-dom/client';

// import { First, Second } from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//     <>
//         <First />
//         <Second />
//     </>
// );

//======================================================================
// import React from 'react';
// import ReactDOM from 'react-dom/client';

// /* 
//     하나의 모듈에서 다중 컴포넌트들을 한꺼번에 임포트하기 위해서 as 와 * 적용.

// 형식    :       import  *  as  객체화(그룹핑)_컨포넌트명

// - 렌더링할 태그화 컴포넌트 적용시에는 반드식 객체화_컨포넌트명을 통해 임포트
//   모듈 내의 실제 컴포넌트명을 호출.
// */
// import * as Components from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//     <>      
//         <Components.App/> 
//         <Components.TestReact />
//         <Components.TestReact2 />
//     </>
// );

//======================================================================

import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <App />
);



