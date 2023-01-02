// eslint-disable - lint 끄는 기능

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
  let post = '강남 우동 맛집'; {/* 자료 잠깐 저장할 땐 변수, state */ }
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬 독학']);
  // let [logo, setLogo] = useState('ReactBlog');
  let [따봉, 따봉변경] = useState(0);
  let [modal, setModal] = useState(false); // true : 모달창이 보이는 상태 false : 안보이는 상태

    /*  
    map 함수 특징 : 
    1. 왼쪽 array 자료 개수 만큼 함수 안의 코드 실행해줌
    2. 함수의 파라미터는 array 안에 있던 자료임
    3. return에 뭐 적으면 오른쪽에 있는걸 array로 담아줌
    */

  // a : state에 보관한 자리 나옴
  // b : state 변경 도와주는 함수
  // 여기서는 ['남자 코트 추천' , 함수] 남음
  /* state 변경 -> 
    let [따봉, 따봉변경] = useState(0); 일 때
    따봉변경(새로운 state 입력) - 따봉변경은 무조건 함수
    따봉 - state의 기본값

    -> 기존 state == 신규state 인 경우 변경 안됨

    array, object 특징 : referance data type이기 때문에

  */

  return ( //return 안에는 병렬로 태그 2개 이상 기입금지
    <div className="App">
      <div className="black-nav">
        <h4 id={post} style={{ color: 'white', fontSize: '16px' }}>react blog</h4> {/* id가 강남우동맛집이 됨 */}
      </div>
      <button onClick={() => {
        let copy = [...글제목];
        copy[0] = '여자코트 추천';
        글제목변경(copy);
      }}>글수정
      </button>
      <div className="list">
        {/* onClick안에는 함수만 쓸 수 있음 중괄호 안에 함수 바로 넣어도 ㄱㅊ */}
        <h4>{글제목[0]}<span onClick={() => { 따봉변경(따봉 + 1) }}>좋아요</span>{따봉}</h4>
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

      {/* 
        컴포넌트 만드는 법
        1. function 만들고
        2. return() 안에 html 담기
        3. <함수명></함수명> 또는 <함수명/> 쓰기

        어떤걸 컴포넌트로 만들면 좋은가
        1. 반복적인 html 축약할 때
        2. 큰 페이지들
        3. 자주 변경되는 것들

        컴포넌트의 단점 :
        state 갖다 쓸 때 불편함

        모든걸 컴포넌트로 만들지말기
      */}

      {/* {
        // html에 if문 쓸 수 없으니까 삼항 연산자 쓰기
        // state에 따라 ui가 어떻게 보일지 작성
        modal == true ? <Modal /> : null
      } */}

      {
        글제목.map(function (a, i) {
          return (
            <div className="list">
              <h4>{글제목[i]}</h4>
              <p>2월 17일 발행</p>
            </div>
          )
        })
      }
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세 내용</p>
    </div>
    //div 두개를 병렬적으로 넣을 수 없음 병렬 기입하고 싶으면 <div>로 또 묶어주거나 <> </> 쓰면됨
  )
}

export default App;


/*
  동적인 ui 만드는 step
  1. html, css 로 미리 디자인 완성
  2. ui의 현재 상태를 state 로 저장
  3. state 에 따라 ui 가 어떻게 보일지 작성
*/