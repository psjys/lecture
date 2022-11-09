/* 
    < Page nation 구현 > - 태그간 종속 관계

- 아래 HTML 구조와 같은 형태로 구성되도록 리액트 구현.

=============================================================================
    
    < 조건 >

1) NationBox 컴포넌트는 NationContainer 에 컴포넌트 태그간 종속 관계가 되도록 구현.

2) NationBox 의 클래스 넘버링(nation1 ~nation5)을 삭제하고 CSS 파일의 opacity 도
  삭제하되, 이를 대체하여 컴포넌트 태그에서 직접 프로퍼티를 전달하는 방식으로 구현.
  단, 디폴트 파라미터나 defaultProps 필드 활용.
*/


import ReactDOM from 'react-dom/client';/
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <App />
);
