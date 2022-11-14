export default function GridstaffList({ staffData }) {
    let createStaffList = [];

    for (let i = 0; i < staffData.length; i++) {
        createStaffList[i] = <div key={`staffList${i}`}>{staffData[i]}</div>;
    }

    return (
        <div>
            {createStaffList}
        </div>
    );
}


/*
    JSX 는 DOM 요소를 표현하기 위한 특수한 형태의 객체로 하기와 같은 결합은 단순한
    JSX 객체 간의 문자열 형태의 결합 결과 확인 가능.
*/
// export default function GridstaffList({ staffData }) {
//     let createStaffList = '';

//     for (let i = 0; i < staffData.length; i++) {
//         createStaffList += <div key={`staffList${i}`}>{staffData[i]}</div>;

//     }

//     return (
//         <div>
//             {createStaffList}
//         </div>
//     );
// }
