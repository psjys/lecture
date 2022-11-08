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
// function Hello({ students, color }) {

//     /* 
//         style 지정 객체의 좌변은 CSS 프로퍼티명이고 우변은 props 로
//         부터 구조분해할당된 변수임을 구분.
//     */
//     return <div style={{ color: color }}>안녕하세요 {students}</div>;
//     // return <div style={{ color }}>안녕하세요 {students}</div>;
// }

// export default Hello;


/* 
    구조분해할당 변수에 디폴트 파라미터 지정 가능.
    또는 해당 컴포넌트의 defaultProps 필드에 객체 형식의
    디폴트 프로퍼티를 할당함으로써 동일한 효과.
    단, defaultProps 필드에 할당하는 방식이 디폴트 파라미터
    지정 방식보다 할당 우선순위가 높아 defaultProps 지정으로
    덮어 쓰는 것을 확인 가능.
    ( defaultProps 의 지정 위치는 관계 없음 )
*/
// function Hello({ students, color = 'red' }) {
//     return <div style={{ color }}>안녕하세요 {students}</div>;
// }

// Hello.defaultProps = {
//     students:'바보들아',
//     color: 'gold'
// };

// export default Hello;