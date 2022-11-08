export default function Event1({ style }) {
    function setBg(e) { 
        e.preventDefault();   // 이 코드를 안쓰면 a 태그를 누를 때 마다 계속 새로고침 돼서 배경이 적용 안되고 깜빡깜빡거림
        e.target.style.backgroundColor = 'blue';
    }

    /* 
        < 이벤트 처리 >

    -   js 와 같이 인라인 형식으로 on ~ 으로 시작하는 이벤트 키워드명을 요소의
        프로퍼티로 하되, js 와 달리 on ~ 이후의 결합문자가 소문자가 아닌 대문자로
        시작함에 유의.
        value 에는 js 의 이벤트리스너와 같이 익명함수나 람다식 객체의 참조만 전달
        가능. 직접 호출은 정상적인 이벤트 처리가 불가.
    */
    return (
        <div>
            <a href="/" style={style} onClick={setBg}>첫 번째 요소</a>
        </div>
    );
}