export default function StudentList({ cusinfo }) {
    return (
        <>
            {cusinfo.map(e => {
                return (
                    <div className='list' key={e.cusNum}>
                        <span>{e.cusNum}</span>
                        <span>{e.cusTitle}</span>
                        <span>{e.cusName}</span>
                    </div>
                )
            }
            )}
        </>
    );
}