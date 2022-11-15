export default function NationContainer({imgSize, selectedIdx, changeSelect}) {
    let nationBox = new Array(imgSize).fill(0);
    nationBox = nationBox.map((el, i, na) => {
        const opacity = selectedIdx === i ? '1' : '.5';
        
        return <a
            href="/"
            key={`nation${i}`}
            className={`nationBox nation${i + 1}`}
            style={{ opacity }}
            onClick={e => {
                e.preventDefault();
                setSelectedIdx(e.target.textContent - 1);
            }}
        
        >
            {i + 1}
        </a>;
    });
    return (
        <div className="nation_container">
            {nationBox}
        </div>
    );
}
