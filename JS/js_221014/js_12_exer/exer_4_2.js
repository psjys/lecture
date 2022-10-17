'use strict';

// HTML 태그를 불러옴
const $img = document.querySelector('img');
const $nation_container = document.querySelector('.nation_container');
const $nationBox = document.getElementsByClassName('nationBox');
const $main_container = document.querySelector('#main_container');

// 이미지 개수
const imageCount = 8;
const images = new Array(imageCount);

// 슬라이드 관련 변수들.
let indexNumber = 1, trigger = true; // 슬라이드 시작 숫자, 일시정지/재시작 트리거
let intervalId; // 인터벌 아이디 들어갈 변수

// 이미지 슬라이드를 위한 인터벌이 들어있는 함수 선언.
function imageSlide() {
    // setInterval을 리턴. 이 값이 인터벌의 아이디값이 됨.
    return setInterval(() => {
        // 인덱스에 해당하는 이미지 경로를 넣음.
        $img.src = `../images/${images[indexNumber]}.jpg`;

        // 링크들을 순회하면서 active 클래스가 있을 수도 있는 경우를 위해 전부 삭제
        for (let j = 0; j < $nationBox.length; j++) $nationBox[j].classList.remove('active');
        // 그 후 해당 인덱스에 active 클래스 추가.
        $nationBox[indexNumber].classList.add('active');
        // 인덱스에 +1.
        indexNumber++;

        if (indexNumber > imageCount - 1) indexNumber = 0;
        // 1.5초에 한 번 실행됨.
    }, 1500);
}

// 배열에 이미지 개수대로 이미지 이름 넣음.
for (let i = 0; i < images.length; i++) {
    images[i] = `img${i + 1}`;
}

// 3번과 동일
for (let i = 0; i < images.length; i++) {
    $nation_container.innerHTML += `<a href="#" class="nationBox nation${i + 1}">${i + 1}</a>`;
}

// 역시 생략
$nationBox[0].classList.add('active');

// ㅇㅇ 생략
for (let i = 0; i < $nationBox.length; i++) {
    $nationBox[i].addEventListener('click', function () {
        for (let j = 0; j < $nationBox.length; j++) {
            if (i === j) {
                $img.src = `../images/${images[i]}.jpg`;
                this.classList.add('active');
                // 링크를 클릭했을 때 인터벌을 위한 인덱스에 링크의 인덱스를 할당.
                // 슬라이드가 진행중일 때 다른 링크를 클릭하면 슬라이드가 멈추는데,
                // 이때 클릭한 링크에서 슬라이드를 재시작할 수 있도록 만들기 위함.
                indexNumber = i;
            } else {
                $nationBox[j].classList.remove('active');
            }
        }
    });
}

// 인터벌 아이디를 만들어둠.
// 페이지가 로드되는 순간부터 슬라이드가 시작되어야 하기 때문에 반드시 필요.
intervalId = imageSlide();

// 메인 컨테이너에 이벤트 등록.
$main_container.addEventListener('click', function () {
    trigger = !trigger;
    if (trigger) {
        // 트리거가 true일 때. 즉 슬라이드가 진행중일 경우에
        // 슬라이드를 멈추고 트리거를 false로 변경.
        clearInterval(intervalId);
    } else {
        // 트리거가 false라면 다시 슬라이드를 재개하고 트리거를 true로 변경.
        // clearInterval을 여기에도 넣는 이유는 누군가는 여러번 클릭할 수 있기 때문.
        clearInterval(intervalId);
        intervalId = imageSlide();
    }
});