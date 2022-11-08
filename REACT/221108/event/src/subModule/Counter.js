function Counter({ spanStyle, btnStyle }) {

    /* 
    동기 - 로직순서대로 처리되는것 
    비동기 - 이벤트처럼 이벤트가 발생했ㅇㄹ 때만 실행되는 것 
        
    < 동기값 >

    -   리액트에서 동기변수에 할당된 값은 순차적인 로직에 의한 변경만 가능.
        따라서 아래의 동기변수에 할당된 값은 이벤트 발생과 같은 비동기적
        상황에 의한 변경 불가.
    */
    let count = 0;      // 동기변수.

    return (
        <>
            <div>COUNTER
                <span style={spanStyle}>{count}</span>
            </div>
            <button style={btnStyle} onClick={() => ++count}>+1</button>  {/* 동기값은 변화가 안됨 */}
            <button style={btnStyle} onClick={() => ++count}>-1</button>
        </>
    );
}

export default Counter;