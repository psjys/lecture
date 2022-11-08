export default function Event2({ style }) {
    function setBg(e) { 
        e.preventDefault();   // 이 코드를 안쓰면 a 태그를 누를 때 마다 계속 새로고침 돼서 배경이 적용 안되고 깜빡깜빡거림
        e.target.style.backgroundColor = 'green';
    }

    return (
        <div>
            <a href="/" style={style} onClick={setBg}>두 번째 요소</a>
        </div>
    );
}