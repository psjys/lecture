// export default function StudentList({ studentInfo }) {
//     return (
//         <>
//             {studentInfo.map(e =>
//                 <div key={e.stNum}>{e.stName}</div>
//             )}
//         </>
//     );
// }


export default function StudentList({ studentInfo, removeSt }) {
    function revokeRegident(stNum) {
        removeSt(stNum);
    }

    return (
        <>
            {/* 
                map 메서드 람다식의 JSX 요소들이 하나의 부모로 둘러싸여 있어 요소 하나로
                간주됨으로써, 블럭{} 없이도 명시적 리턴이 필요치 않음.
            */}
            {studentInfo.map(e =>
                <div key={e.stNum}>
                    {e.stName}

                    {/* 
                        이벤트에 직접 함수를 호출하는 형태는 불가하므로 이와같이 익명객체를
                        생성하여 참조를 전달하되 그 내부에서 함수를 호출하는 형식을 취함.
                    */}
                    <button onClick={() => revokeRegident(e.stNum)}>등록취소</button>
                </div>
            )}
        </>
    );
}

