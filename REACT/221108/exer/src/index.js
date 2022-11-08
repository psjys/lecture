/* 
    < Page nation 구현 > - 모듈간 종속 관계

- 아래 HTML 구조와 같은 형태로 구성되도록 리액트 구현.

=============================================================================
    
    < 조건 >

1) 3개의 컴포넌트로 구현. ( Img, NationContainer, NationBox )

2) Img, NationContainer 컴포넌트는 형제 관계로 구성하되,
  NationBox 컴포넌트는 NationContainer 에 모듈 간 종속 관계가 되도록 구현.

3) 이미지의 경로와 대체 텍스트는 Img 컴포넌트 태그에서 프로퍼티 형태로 전달하도록 구현.

4) NationBox 의 클래스(nation1 ~nation5) 넘버링과 컨텐트의 넘버링은 NationBox
  컴포넌트 태그에서 프로퍼티 형태로 전달하도록 구현.

5) 반복문은 미사용.

=============================================================================

*/
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <App />
);