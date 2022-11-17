// import { useRef, useState } from 'react';
// import StudentList from './subModule/StudentList';
// import './App.css';

// export default function App() {
//   const [cusinfo, setCusinfo] = useState([
//     {
//       cusNum: 2,
//       cusTitle: '괴물만들기',
//       cusName: '류승제',
//     },
//     {
//       cusNum: 1,
//       cusTitle: '괴롭히기',
//       cusName: '박성연',
//     },

//   ]),
//     [inputName, setinputName] = useState(''),
//     [inputTitle, setinputTitle] = useState(''),
//     [clear, setclear] = useState(''),
//     cusNum = useRef(3),
//     inputBox = useRef(),
//     removeBox = useRef(),
//     [text, setText] = useState('');


//   function abc(e) {
//     setclear(e.target.value);
//   }

//   function inputSet(setter, e) {
//     setter(e.target.value);
//   }

//   function regidentSt() {

//     if (inputName && inputTitle && text) {
//       const addSt = {
//         cusNum: cusNum.current,
//         cusName: inputName,
//         cusTitle: inputTitle,
//       }

//       setCusinfo([addSt, ...cusinfo]);
//       cusNum.current++;

//       setinputName('');
//       setinputTitle('');
//       setText('');

//       inputBox.current.focus();
//     }
//   }

//   function removeStr() {
//     setCusinfo(cusinfo.filter((v) => v.cusNum !== +clear));
//     setclear('');
//     removeBox.current.focus();
//   }

//   return (
//     <>
//       <div className="main_container">
//         <div>
//           <h1>게시판</h1>
//           <div className="text_container">
//             <StudentList cusinfo={cusinfo} />
//           </div>
//           <div>사용자
//             <input
//               placeholder="한글로만 입력해라"
//               name='inputName'
//               type="text" value={inputName}
//               onChange={(e) => inputSet(setinputName, e)}
//               ref={inputBox}
//             />
//           </div>

//           <div>제목
//             <input
//               placeholder="제목은 파격적으로"
//               name='inputTitle'
//               type="text" value={inputTitle}
//               onChange={(e) => inputSet(setinputTitle, e)}
//             />

//           </div>
//           <div>글쓰기</div>
//           <textarea cols="30" rows="10" value={text} onChange={(e) => inputSet(setText, e)}
//             placeholder="이쁘게 쓰시오,,,">
//           </textarea>
//           <div>
//             <button onClick={regidentSt}>등록</button>
//           </div>
//           <div>삭제등록번호</div>
//           <div>
//             <input type="text"
//               placeholder="삭제할 등록번호"
//               value={clear}
//               onChange={abc}
//               ref={removeBox}
//             />
//           </div>
//           <button onClick={removeStr}>삭제</button>
//         </div>
//       </div>
//     </>
//   )
// }



//==========================================
// 선생님 코드 1

// import { useState, useRef } from 'react';
// import './App.css';
// import ContentLists from "./ContentLists/ContentLists";
// import InputUserInfo from "./InputUserInfo/InputUserInfo";

// function App() {
//   const [userList, setUserList] = useState([
//     {
//       serialNum: 1,
//       userName: '박성연',
//       subject: '괴롭히기',
//       content: '이 바보들아 왜 말을 안들어!!',
//     },
//     {
//       serialNum: 2,
//       userName: '류승제',
//       subject: '괴물만들기',
//       content: '야 ~ 밥목고 하자 ~',
//     },
//   ]);

//   const [inputData, setInputData] = useState({      // 입력 데이터의 관리 용이성을 위한 객체.
//     userName: '',
//     subject: '',
//     content: '',
//     delSerialNum: ''
//   }),
//     { userName, subject, content, delSerialNum } = inputData,
//     serialNum = useRef(3);                                 // 일련번호 생성.

//   function onChangeInput(e) {
//     const { name, value } = e.target;

//     setInputData({
//       ...inputData,
//       [name]: value,
//     });
//   }

//   function addUserList() {
//     if (userName && subject && content) {
//       const addUser = {                  // 입력 데이터를 원본 형식에 맞추어
//         serialNum: serialNum.current,      // 추가하기 위한 임시 객체 생성.
//         userName,
//         subject,
//         content,
//       }

//       serialNum.current++;

//       setUserList([
//         ...userList,
//         addUser,
//       ]);

//       setInputData({
//         ...inputData,
//         userName: '',
//         subject: '',
//         content: '',
//       });
//     }
//   }

//   function removeUserList() {
//     if (delSerialNum) {
//       setUserList(userList.filter((user) => user.serialNum !== +delSerialNum));

//       setInputData({
//         ...inputData,
//         delSerialNum: '',
//       });
//     }
//   }

//   return (
//     <div id='noticeboard'>
//       <h1>게시판</h1>
//       <ContentLists userList={userList} />
//       <InputUserInfo
//         inputData={inputData}
//         onChangeInput={onChangeInput}
//         addUserList={addUserList}
//         removeUserList={removeUserList}
//       />
//     </div>
//   );
// }

// export default App;

//==========================================
// 선생님 코드 2

import { useState, useRef } from 'react';
import './App.css';
import ContentLists from "./ContentLists/ContentLists";
import InputUserInfo from "./InputUserInfo/InputUserInfo";

function App() {
    const [userList, setUserList] = useState([
        {
            serialNum: 2,
            userName: '류승제',
            subject: '괴물만들기',
            content: '야 ~ 밥목고 하자 ~',
        },
        {
            serialNum: 1,
            userName: '박성연',
            subject: '괴롭히기',
            content: '이 바보들아 왜 말을 안들어!!',
        },
    ]);

    const [inputData, setInputData] = useState({      // 입력 데이터의 관리 용이성을 위한 객체.
        userName: '',
        subject: '',
        content: '',
        delSerialNum: '',
    }),
        { userName, subject, content, delSerialNum } = inputData,
        serialNum = useRef(3);                                 // 일련번호 생성.

    function onChangeInput(e) {
        const { name, value } = e.target;

        setInputData({
            ...inputData,
            [name]: value,
        });
    }

    function addUserList() {
        if (userName && subject && content) {
            const addUser = {                  // 입력 데이터를 원본 형식에 맞추어
                serialNum: serialNum.current,      // 추가하기 위한 임시 객체 생성.
                userName,
                subject,
                content,
            }

            serialNum.current++;

            /* 
                데이터 추가 시 거꾸로 배치.
            */
            setUserList([
                addUser,
                ...userList,
            ])

            setInputData({
                ...inputData,
                userName: '',
                subject: '',
                content: '',
            })
        }
    }

    function removeUserList() {
        if (delSerialNum) {
            setUserList(userList.filter((user) => user.serialNum !== +delSerialNum));

            setInputData({
                ...inputData,
                delSerialNum: '',
            });
        }
    }

    return (
        <div id='noticeboard'>
            <h1>게시판</h1>
            <ContentLists userList={userList} />
            <InputUserInfo
                inputData={inputData}
                onChangeInput={onChangeInput}
                addUserList={addUserList}
                removeUserList={removeUserList}
            />
        </div>
    );
}

export default App;
