export default function InputUserInfo({ inputData, onChangeInput, addUserList, removeUserList }) {
    const { userName, subject, content, delSerialNum } = inputData;

    return (
        <div className="inputForm">
            {/* label 은 css 에서 block 처리 */}
            <label className="userName">
                사용자
                <input
                    type="text"
                    name="userName"
                    value={userName}
                    placeholder='한글로만 입력해라'
                    onChange={onChangeInput}
                />
            </label>

            <label className="subject">
                제목
                <input
                    type="text"
                    name="subject"
                    value={subject}
                    placeholder='제목은 파격적으로...'
                    onChange={onChangeInput}
                />
            </label>

            <label className="content">
                글쓰기
                <textarea cols="50" rows="10"
                    name="content"
                    value={content}
                    placeholder='이쁘게 쓰시오...'
                    onChange={onChangeInput}
                ></textarea>
            </label>
            <button onClick={addUserList}>등록</button>

            <label className="delSerialNum">
                삭제 등록번호
                <input
                    type="text"
                    name="delSerialNum"
                    value={delSerialNum}
                    placeholder='삭제할 등록번호 입력해봐라...'
                    onChange={onChangeInput}
                />
            </label>
            <button onClick={removeUserList}>삭제</button>
        </div>
    );
}