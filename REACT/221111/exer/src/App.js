import { useState } from 'react';
import GridstaffList from './subModule/GridstaffList';

/* 
    ※ 컴포넌트의 설계는 모듈화 원칙에 의거하여 주 데이터를 항상 상위 모듈에서 관리하고
      하위 모듈에서는 그 데이터를 기반으로 실제 구현만 하는 구조적 이해가 필요.
      즉, 주 데이터를 하위에서 관리 및 저장하는 것은 설계원칙에도 부합되지 않고 구현상
      에서도 실제 문제가 발생함에 주의.
*/
function App() {
  const [staffName, setStaffName] = useState(''),         // 입력 직원명.
    [staffData, setstaffData] = useState([]);   // 등록 직원명 배열.

  function inputStaffName(e) {            // 입력된 직원명을 저장하는 함수.
    setStaffName(e.target.value);
  }

  /* 
      입력된 직원명을 배열에 저장하고 입력 변수를 초기화하는 함수.
  */
  function registerStaffName() {
    if (staffName) {                           // 입력없이 빈 등록 버튼을 클릭하는 경우 빈 문자열이
      setstaffData([...staffData, staffName]); // 배열에 저장되므로 렌더링시에는 추가 되지 않아
      setStaffName('');                        // 문제가 없지만, 배열의 크기가 필요없이 확대되므로
                                               // 이에 대한 방어 코드 필요. ( if(staffName) 로 방어 )
    }
  }

  return (
    <>
      <div style={{ marginBottom: '20px' }}>&lt;직원 명단&gt;</div>
      <GridstaffList staffData={staffData} />
      <input
        type="text"
        value={staffName}
        onChange={inputStaffName} />
      <button
        style={{ marginTop: '20px' }}
        onClick={registerStaffName}>
        명단추가
      </button>
    </>
  );
}

export default App;