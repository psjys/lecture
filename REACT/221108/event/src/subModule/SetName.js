// export default function SetName({ setName }) {
//     const myName = [
//         '박성연',
//         '홍길동',
//         '김구라',
//     ];

//     /* 
//         클릭 이벤트가 발생했을 때 해당 객체의 컨텐트 값을 얻어
//         상위 컴포넌트에서 전달받은 함수(setName)의 참조를 통해
//         호출함으로써 상위 컴포넌트의 실함수에서 매개변수 형태로
//         전달받는 형태.
//     */
//     function getName(e) {
//         setName(e.target.textContent);
//     }

//     return (
//         <>
//             <button onClick={getName}>{myName[0]}</button>
//             <button onClick={getName}>{myName[1]}</button>
//             <button onClick={getName}>{myName[2]}</button>
//         </>
//     );
// }

                                    //이거는 키
export default function SetName({ setYourName }) {
    const myName = [
        '머털이',
        '홍길동',
        '김구라',
    ];

    function getName(e) {
        setYourName(e.target.textContent);
    }
    return (
        <>
            <button onClick={getName}>{myName[0]}</button>
            <button onClick={getName}>{myName[1]}</button>
            <button onClick={getName}>{myName[2]}</button>
        </>
    );
}