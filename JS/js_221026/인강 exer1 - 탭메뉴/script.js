/*
탭메뉴를 클릭하면 관련 내용이 나타나고
하이라이트 배경이 활성화된 메뉴위치로 이동합니다.
*/
const tabMenu = document.querySelectorAll('.tab-menu li');
const tabContent = document.querySelectorAll('#tab-content > div');
const highlight = document.querySelector('.highlight');

//showContent 함수
function showContent(num) { // 숫자가 들어오면 그 숫자가 안보이게 하기
    tabContent.forEach(function (item) {
        item.style.display = 'none';
    });
    tabContent[num].style.display = 'block';
}

showContent(0);

//메뉴 클릭 이벤트 - 메뉴를 클릭하면 할 일
tabMenu.forEach(function (item, idx) {
    item.addEventListener('click', function (e) {
        e.preventDefault();
        showContent(idx);
        moveHighlight(idx);
    });
});

//Highlight 이동함수
function moveHighlight (num) {
    let newLeft = tabMenu[num].offsetLeft;
    let newWidth = tabMenu[num].offsetWidth;
    console.log(newLeft, newWidth);
    highlight.style.left = newLeft + 'px'; // 반드시 px 값으로 들어와야해서 px붙여줌
    highlight.style.width = newWidth + 'px'; 
}