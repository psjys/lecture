/*
    < 문제 >

- 아래 HTML 코드를 이용하여 기존 작성하였던 Page nation 을 재구현하라.


    < 조건 >

1) Flex 레이아웃과 JS 를 활용한 코드 리팩토링.

2) main_container 가 화면 중앙에 배치되도록 하고 500 x 540 크기가
    유지되도록 구현.

3) img 는 500 x 500 크기로 지정.

4) nationBox 는 30 x 30 크기로 지정.

5) 개별 페이지 내이션들과의 간격과 페이지 내이션과 이미지 사이의 간격은 10px.
*/

import {useState} from 'react';
import 'App.css';
import NationBox from './subModule/nationContainer';

function App() {
    const imgList = [
        './image/1.jpg',
        './image/2.jpg',
        './image/3.jpg',
        './image/4.jpg',
        './image/5.jpg',
    ],
        [selectedIdx, setSelectedIdx] = useState(0);
    return (
        <div className='main_container'>
            <img src={imgList[selectedIdx]} alt="imgBox" />
            <NationBox
                imgSize={imgList.length}
                selectedIdx={selectedIdx}
                setSelectedIdx={setSelectedIdx}
            />
        </div>
    );
}

export default App;