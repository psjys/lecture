// /* 
//     props 는 관례상 명칭에 불과.
// */
// function Hello(props) {
//     return <div>안녕하세요 {props.students}</div>;
// }

// export default Hello;

/* 
    컴포넌트에 전달된 props 객체를 구조분해 할당하여 참조.
    
    구조분해 할당변수의 나열 순서는 상관이 없지만, 반드시
    태크 컴포넌트의 사용자정의 프러퍼티명과 동일해야만
    정상적으로 인식됨에 주의.
*/
function Hello({ students, color }) {

    /* 
        style 지정 객체의 좌변은 CSS 프로퍼티명이고 우변은 props 로
        부터 구조분해할당된 변수임을 구분.
    */
    return <div style={{ color: color }}>안녕하세요 {students}</div>;
    // return <div style={{ color }}>안녕하세요 {students}</div>;
}

export default Hello;