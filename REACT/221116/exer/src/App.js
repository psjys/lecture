import './App.css';

function App() {
  return (
    <div>
      <h1>게시판</h1>
      <div>
        <label>사용자
          <input type="text"
            placeholder="한글로만 입력해라"
          />
        </label>
      </div>
      <div>
        <label>제목
          <input type="text"
            placeholder="제목은 파격적으로"
          />
        </label>
      </div>
      <div>
        <label>글쓰기
          <textarea
            placeholder="이쁘게 쓰시오"
            className = "textArea"
          />
        </label>
        <button>등록</button>
      </div>
    </div>
  )
}

export default App;