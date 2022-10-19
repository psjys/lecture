'use strict';

let btn = document.getElementsByTagName('button');

// ==================================================================================
// 현재 페이지에 로드1

/*
    < location.href >

- 현재 페이지(탭)의 URL 정보를 반환 및 변경 가능.
    a(anchor) 태그의 target 속성에 '_self' 값을 지정한 경우와 동일.

형식  :  location.href = '문자열 형태의 URL'
*/

console.log(location.href);

btn[0].addEventListener('click', () => {
    location.href = './html/changePage.html';
});

// ==================================================================================

/*
    < window.open >

- 지정된 URL에 해당하는 페이지를 현재 페이지나 다른 탭 또는 다른 웹 팝업창
    형태로 로드.
    ( window 객체는 생략 가능. )

형식  :  open(url?: string | URL, target?: string, features?: string): Window        - feature(피쳐) : 특색, 특징



- target : "_self" 값 지정이 가능하여 이는 a 태그의 기능과 동일하지만, 빈 문자열이나
            임의 명칭을 지정하면 디폴트로 "_blank" 가 할당되고 features 지정 여부에
            따라 지정한 페이지가 새로운 탭에 로드될것인지 새로운 팝업창에 로드될 것
            인지의 여부가 결정.
            여기서 target 의 명칭은 개별 탭이나 팝업창을 식별하는 식별자 역할을 하며           
            명칭에는 공백 포함 불가.
            a 태그의 target 속성과 여러가지 면에서 유사하지만 a 태그는 target의
            디폴트가 "_self" 로 할당되는 반면, open 메서드는 target 을 "_self" 로
            지정하지 않는 이상 target 디폴트가  "_blank" 로 할당되는 것에 차이.
            또한 a 태그의 "_blank" 는 새로운 탭에 페이지가 로드되는 것을 의미하지만
            open 메서드에서는 features 지정 여부에 따라 새로운 탭 또는 새로운 팝업창
            로드될지가 결정되는 차이점.
            ( a 태그는 새로운 팝업창에 로드하는 기능은 없음. )
            명칭이 동일한 경우에는 동일 탭이나 동일 팝업창에 로드가 되지만 명칭이
            다르거나 명칭에 빈 문자열을 전달하면 항상 새로운 탭이나 팝업창에 로드
            되는 특성.

- features : 새로운 팝업창의 위치나 크기등을 지정할 수 있는 인자로 생략 시 target
            을 '_self' 로 지정하지 않는 이상 새로운 탭에 로드되는 특성.
            즉, target 을 '_self' 로 지정하지 않는 이상 features 의 지정 여부가
            새로운 탭 또는 새로운 팝업창에 열릴것인지의 여부를 결정.
            features 에 빈 문자열을 전달하는 경우에도 인자가 지정되지 않은 것으로
            인정되어 새로운 탭에 로드.

- Window : open 메서드를 통해 현재 페이지나 다른 탭 또는 다른 웹 팝업창에 로드된
            페이지의 참조를 반환.
*/

// 현재 페이지에 로드2
btn[1].addEventListener('click', () => {

    /* 
        target 에 '_self' 값이 할당되었으므로 현재 페이지에 로드.
        이 때에는 features 를 지정하더라도 무시.
    */
    window.open('./html/changePage.html', '_self');
});

// ==================================================================================
// 다른 탭에 로드

btn[2].addEventListener('click', () => {

    /* 
        target 에 '_self' 값이 할당되지 않는이상 디폴트로 "_blank" 가 할당되고
        features 인자가 생략되었으므로 새로운 탭에 로드.
    */
    open('./html/changePage.html');
});

// ==================================================================================
// 새로운 팝업창1에 로드

let popup1, popup2;         // 새로 생성된 팝업창 페이지의 참조를 반환받기 위한 변수.

btn[3].addEventListener('click', () => {

    /* 
        < features 인자에 할당 가능한 속성 >
    
    - width : 생성되는 팝업창의 너비.       - innerWidth
    - height : 생성되는 팝업창의 높이.      - innerHeight
    - left : 팝업창이 생성되는 수평 위치.
            웹페이지가 기준이 아닌 디스플레이 화면의 왼쪽이 기준.
    - top : 팝업창이 생성되는 수직 위치.
            웹페이지가 기준이 아닌 디스플레이 화면의 최상단이 기준.
    */

    // features 인자가 지정되었으므로 새로운 팝업창에 로드.
    popup1 = open('./html/changePage.html', '팝업창1', 'width=300px, height=300px');
});

// ==================================================================================
// 새로운 팝업창2에 로드(화면 중앙정렬)

btn[4].addEventListener('click', () => {

    /* 
        < screen.width 와 screen.height >

    - 실제 디스플레이 화면(모니터)에 대한 너비와 높이를 반환하며 화면 확대/축소에
        따른 비율과 관계없는 절댓값을 반환.
    
    
    - screen.width : 디스플레이 화면(모니터)의 전체 가로 픽셀(Pixel).
    
    - screen.height : 디스플레이 화면(모니터)의 전체 세로 픽셀(Pixel).
    */

    let locationX = (screen.width - 300) / 2;    // 팝업창의 중앙 배치를 위한 수평 좌표값 측정.
    let locationY = (screen.height - 300) / 2;   // 팝업창의 중앙 배치를 위한 수직 좌표값 측정.

    /*
        < screenLeft, screenTop > - 듀얼모니터인 경우 screen.width 나 screen.height 에 대한 부가 설정 필요.
    
    - 뷰포트에서의 브라우저창 왼쪽과 상단을 기준으로한 위치값을 각각 픽셀단위로 반환.
    
        screen.width 나 screen.height 는 듀얼모니터인 경우, 주 화면이 아닌 보조화면에서는
        주화면에서부터의 전체 수평(수직) 너비(높이)를 산출. 따라서 보조 화면에서의 정렬을
        위해서는 아래와 같이 screenLeft 를 이용하여 주화면 왼쪽으로부터 보조화면에서 열리는
        브라우저의 최초 수평 위치를 구하여, 그 지점부터의 화면너비를 산출하여 정렬해야함에
        주의.
    */
    // let locationX = screenLeft + (screen.width - 300) / 2; // 팝업창의 중앙 배치를 위한 수평 좌표값 측정.

    /*
        상기의 target 팝업창 명칭과 다르므로 새로운 팝업창 생성.
        target 명칭이 동일한 경우에는 기존 팝업창에 리로드.
    
    ====================================================================================
    
        < 브라우저 및 팝업 창의 width 와 height >
    
    - width(innerWidth), height(innerHeight) : 순수 페이지 영역이 보이는 영역으로 창의
        테두리, 제목표시줄, 주소표시줄, 각종 도구모음 등을 제외한 너비와 높이.
        단, 스크롤바는 포함됨에 주의.
    
    - outerWidth, outerHeight : 브라우저창이나 팝업창의 전체 너비와 높이로써 창의 테두리,
        제목표시줄, 주소표시줄, 각종 도구모음과 스크롤바등을 모두 포함한 너비와 높이.
    
    ====================================================================================
    
    ※ open 함수의 features 에 지정 가능한 너비와 높이는 innerWidth 와 innerHeight 로써
        팝업창에 대한 정확한 중앙 정렬을 지정하기 위해서는 outerWidth 와 outerHeight 로
        너비와 높이를 지정해야함에 주의.
    
    ====================================================================================
    
        < resizeTo >
    
    - 브러우저 창의 참조를 통해 창의 너비와 높이를 outerWidth 와 outerHeight 로 동적
        변경 가능한 메서드.
    */
    popup2 = open('./html/changePage.html', '팝업창2', `width=300px, height=300px, left=${locationX}px, top=${locationY}px`);
    popup2.resizeTo(300, 300);

    /* 
        open 함수에 지정할 innerWidth 와 innerHeight 는 resizeTo 함수를 이용해 다시
        outerWidth 와 outerHeight 로 재조정해야 하므로 아래와 같이 open 함수의 width 와
        height 는 생략 가능.
    */
    // popup2 = open('./html/changePage.html', '팝업창2', `left=${locationX}px, top=${locationY}px`);
    // popup2.resizeTo(300, 300);
});

// ==================================================================================
// 모든 팝업창 닫기

btn[5].addEventListener('click', () => {

    /* 
        open 메서드를 통해 반환된 팝업창 객체의 참조를 이용
        close 메서드를 호출함으로써 팝업창 닫기 실행.
    */
    popup1.close();
    popup2.close();
});