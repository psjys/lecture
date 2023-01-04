// eslint - disable

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let post = '강남 우동 맛집';
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 맛집 추천', '이거 어떻게하는거예요']);
  let [따봉, 따봉변경] = useState(0);
  let [modal, setModal] = useState(false);

  function 함수() {
    console.log(1);
  }
  return ( // return() 안에는 병렬로 태그 2개 이상 기입 금지
    // html이 아니라 JSX 임 (.js 파일에서 쓰는 html 대용품)
    <div className="App">
      {/* 상단 메뉴 만들기 */}
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      <button onClick={() => {

        let copy = [...글제목];
        copy[0] = '여자코트 추천';
        글제목변경(copy);
      }}>글수정</button>
      <div className="list">
        <h4>{글제목[0]} <span onClick={() => { 따봉변경(따봉 + 1) }}>👍🏻</span> {따봉} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4 onClick={() => { setModal(true) }}>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
      {
        modal == true ? <Modal /> : null
      }
      {/* <Modal></Modal> */}
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
    // 두개의 div 병렬적으로 넣을 수 없음 
  );
}
export default App;