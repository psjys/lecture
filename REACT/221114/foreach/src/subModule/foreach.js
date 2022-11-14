export default function Foreach({ staffData }) {
    // let createStaffList = [];

    // staffData.forEach((v, i) => {
    //     createStaffList.push(<div key={`staffList${i}`}>{v}</div>);
    // });

    // staffData.forEach((v,i) => staffData[i] = <div key={`staffList${i}`}>{staffData[i]}</div>);
    staffData = staffData.map((v,i) =><div key= {`staffList${i}`}>{staffData[i]}</div>);
    return (
        <div>
            {/* {createStaffList} */}
            {staffData.map((v, i) => <div key={`staffList${i}`}>{staffData[i]}</div>)}
        </div>
    );
}

