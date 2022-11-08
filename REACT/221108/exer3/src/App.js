import "./App.css"
import Img from "./Img";
import NationContainer from "./NationContainer";
import NationBox from "./NationBox";

function App() {
    let nationBox = []; 

    /* 
        루프 형태의 반복적인 JSX 요소 생성시에는 각 요소를 식별할 수
        있는 고유한 key 프로퍼티를 반드시 할당해야함에 주의.
        
        JSX props 에 Template literals 지정시에는 Template literals 을
        기본적으로 문자열 형식이 아닌 표현식으로 인식하여 반드시
        표현식 블럭{} 내에서 구현해야함에 주의.
    */
    for (let i = 0; i < 5; i++) {

        /* 
            JSX 표현식 블럭{} 내의 값은 기본적으로 모두 문자열 형식으로
            인식되므로 opacity 할당시 별도의 문자열 구분자 지정 불필요.
        */
        nationBox[i] = <NationBox key={`nation${i}`} nationNum={i + 1} opacity={i > 0 ? 0.5 : 1} />;
        // nationBox.push(<NationBox key={`nation${i}`} nationNum={i + 1} opacity={i > 0 ? 0.5 : 1} />);
    }   // push : 배열 마지막에 생성해주는 메서드 / 0, 1, 2가 있으면 3을 만들어줌

    return (
        <div id="main_container">
            <Img src="./images/1.jpg" alt="img" />
            <NationContainer>
                {nationBox}
            </NationContainer>
        </div>
    );
}

export default App;