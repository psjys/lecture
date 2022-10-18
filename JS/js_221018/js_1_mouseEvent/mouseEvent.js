'use strict';

let btn = document.getElementsByTagName('button'),
    span = document.getElementsByTagName('span');

/* 
    < dblclick >

- 더블클릭 이벤트

===============================================================================

    < cursor >  - https://developer.mozilla.org/ko/docs/Web/CSS/cursor - 참고

- 마우스 커서가 요소 위에 있을 때 모양 설정.
    마우스 커서 모양만 설정할 뿐이지 클릭 효과나 기능을 제어하지는 않음에 주의.

default : 브라우저 별 기본 커서. ( 일반적으로 화살표 )
auto : 브라우저가 요소에 맞추어 자동으로 커서 모양 설정.
none : 커서 없음.
pointer : 링크를 나타내는 포인터. ( 검지손가락 )
wait : 모래시계나 로딩지연 이미지.

※ 클릭이나 더블클릭 이벤트 효과가 없는 요소도 기본적인 클릭에 대한 시각적
    이미지 효과만 없을뿐 cursor 나 pointerEvents 속성 지정 없이도 addEventListener
    메서드를 통해 클릭이나 더블클릭에 대한 이벤트 지정이 가능함에 주의.

*/


btn[0].addEventListener('dblclick', () => {
    btn[1].style.cursor = 'none';
});

/* 
    < EventListener 의 익명함수, 람다식의 매개변수 >

- EventListener 의 익명함수, 람다식에 매개변수 지정 시 매개변수가 자동으로
    참조하는 것은 이벤트를 지정한 요소 자체의 참조가 아닌 요소가 기본적으로
    가지고 있는 활성 이벤트 객체의 참조가 할당.

===============================================================================

    < target 프로퍼티 >

- 임의 요소가 기본적으로 가지고 있는 활성 이벤트 객체에 할당되어 있는
    프로퍼티로써 활성 이벤트 객체의 주체가 되는 요소의 참조를 반환.
    즉, 람다식 내에서 사용 불가한 this 를 대체하여 익명함수에서의 this 와
    동일한 참조를 부여 가능.
*/

btn[1].addEventListener('dblclick', event => {
    event.target.style.cursor = 'wait'; // 람다식 내 this는 빈 객체 반환
});

btn[2].addEventListener('dblclick', event => {
    event.target.style.cursor = 'pointer';
});

/* 
    < pointerEvents >

- 요소에 대한 포인터 이벤트 대상 여부를 지정.
    pointerEvents 지정을 하지 않는다 해도 요소가 기본적으로 가지고 있는 클릭에
    대한 시각적 이미지 효과만 적용되지 않을뿐, addEventListener 메서드를 통해 모든
    요소에 대한 이벤트 동작 부여 가능.
    단, pointerEvents 속성 값 할당에 따라 요소가 기본적으로 가지고 있는 포인터
    이벤트 효과를 지정 또는 해제할 뿐만 아니라, addEventListener 메서드를 통해
    요소에 부여한 이벤트 동작 자체도 지정 또는 해제 가능.

none : 포인터 이벤트 효과 및 이벤트 동작 지정 해제.
auto : 포인터 이벤트 효과 및 이벤트 동작 지정.

*/

btn[3].addEventListener('dblclick', () => {
    btn[0].style.pointerEvents = 'none';
});

btn[4].addEventListener('dblclick', () => {
    span[0].style.cursor = 'default';
});


// =============================================================================

span[0].addEventListener('dblclick', () => {
    btn[0].style.pointerEvents = 'auto';
});



// 2. mousedown, mouseup
let box1 = document.getElementsByClassName('box1');

/* 
    < mousedown >

- 마우스 버튼이 눌릴 때 이벤트 핸들러 할당.


    < mouseup >

- 마우스 버튼이 놓일 때 이벤트 핸들러 할당.
*/


box1[0].addEventListener('mouseup', function () {
    this.style.fontSize = '2em';
});

box1[0].addEventListener('mouseup', function () {
    this.style.color = 'red';
});

// =============================================================================
// 3. mouseenter, mouseleave

let box2 = document.getElementsByClassName('box2');

/* 
    < mouseenter, mouseleave >

- 마우스 포인터가 객체 위로 이동하거나 벗어 났을 때 이벤트 핸들러 할당.
*/

box1[1].addEventListener('mouseleave', function () {
    box2[0].textContent = +box2[0].textContent + 1;
});

box2[1].textContent = 100;
box1[2].addEventListener('mouseleave', function () {
    /*
    숫자 형태의 문자열에 숫자 형식 연산 시 + 연산자가 아닌
    경우에는 부호 연산 불필요.
   */
    box2[1].textContent = box2[1].textContent - 1;
});

// =============================================================================
// 4. mouseover, mouseout

/* 
    < mouseover, mouseout >

- 마우스 포인터가 객체 위로 이동하거나 벗어 났을 때 이벤트 핸들러 할당은
    mouseenter, mouseleave 와 동일.
    단, mouseenter, mouseleave 는 인벤트 핸들러를 할당한 해당 객체에만 적용되는
    반면, mouseover, mouseout 해당 객체의 자식 요소에도 이벤트 핸들러 할당이
    상속되어 적용되는 특성 차이.
*/

box2[3].textContent = 100;
box1[4].addEventListener('mouseout', function () {
    box2[3].textContent = box2[3].textContent - 1;
});


// =============================================================================
// 5. mousemove


let box3 = document.getElementsByClassName('box3');
let circle = document.querySelector('.circle');

box3[0].addEventListener('mousemove', function (event) {
    // console.log('pageX ' + event.pageX);        // 전체 문서에서 좌표
    // console.log(event.pageY);

    setTimeout(() => {
        circle.style.display = 'none';            // 이전 위치에서의 잔상을 제거하기 위한 설정.
        /*
            < offsetX, offsetY >
    
            - 기준이되는 부모요소를 기준으로 이벤트 객체가 발생되는
            위치에서의 x, y 좌표값 반환.
    
    
            < pageX, pageY >
    
            - 전체 문서를 기준으로 이벤트 객체가 발생되는 위치에서의
            x, y 좌표값 반환.
           */
        circle.style.left = `${event.offsetX}px`;
        circle.style.top = `${event.offsetY}px`;
        circle.style.display = 'inline-block';
    }, 50);

})

// =============================================================================

/*
    < preventDefault >

- 지정된 요소가 가지고 있는 기본 이벤트 동작을 막는 역할.
    단, 여기서 기본 이벤트 동작이라 함은 클릭과 같은 행위를 했을 때의 이벤트 효과나
    클릭 자체의 동작이 아닌 클릭으로 인해 인과되는 결과 동작을 의미함에 주의.
    요소 자체에 대한 것이 아닌, 요소가 기본적으로 가지고 있는 이벤트 동작에 대한
    지정이므로 this 로는 불가하며 익명함수나 람다식에 임의 매개변수를 지정함으로써
    요소가 가지고 있는 기본적인 활성 이벤트 객체의 참조를 통해 호출 가능.
*/

let aLink = document.querySelector('a');

// aLink.addEventListener('click', event => {
//     event.preventDefault();
// });