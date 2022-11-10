import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

/* state 사용법 
  1. import {useState}
  2. useState (보관할 자료)
  3. let [작명, 작명]

  destructing 문법 
  let num = [1, 2];
  let a = num[0];
  let c = num[1];

  let [a,c] = [1, 2];

  왜 state 써야 할까?
  - 일반 변수는 갑자기 변경되면 html에 자동으로 반영 안 됨
    state는 갑자기 변경 되면 state 쓰던 html은 자동 재렌더링됨
    변동시 자동으로 html에 반영되게 만들고 싶으면 state쓰기
    자주 변경될거같은 html부분은 state로 만들어놓기

*/

// class 넣을 땐 className
// 변수 넣을 땐 {중괄호}  (데이터 바인딩)
// style 넣을 땐 style = {{스타일명 : '값'}}

function App() {
  let post = '강남 우동 맛집'; {/* 자료 잠깐 저장할 땐 변수, state */}
  let [글제목,b] = useState('남자 코트 추천');
  let [logo, setLogo] = useState('ReactBlog');
  
// a : state에 보관한 자리 나옴
// b : state 변경 도와주는 함수
// 여기서는 ['남자 코트 추천' , 함수] 남음

  return ( //return 안에는 병렬로 태그 2개 이상 기입금지
    <div className="App">
      <div className="black-nav">
        <h4 id={post} style={{color : 'white', fontSize : '16px'}}>블로그임</h4> {/* id가 강남우동맛집이 됨 */}
      </div>
      <div className = "list">
        <h4>{글제목}</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;

  
