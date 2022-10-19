'use strict';

let nav = document.getElementById('nav');

nav.addEventListener('click', function(e) {
    e.target.style.backgroundColor = 'yellow'
});

nav.addEventListener('click', function (e) {
    const eventOj = e.target;

    if (eventOj.tagName === 'LI') {
        eventOj.style.backgroundColor = 'yellow'
    }
});


nav.addEventListener('click', function(e) {
    let eventOj = e.target;
    while(eventOj.tagName !== 'LI') {
        eventOj = eventOj.parentNode;
        /*
        ※ li 의 상위 요소이면서 이벤트 위임 조상 핸들러에 포함되는 영역
            요소에 이벤트 발생 시의 방어 코드.
            단, 하기 방어 코드는 nav 의 상위 요소에 다른 li 가 존재하는
            경우에는 해당 상위 li 에 이벤트가 유도됨으로써 적용 불가.
        */
        if (eventOj.tagName === 'BODY') return;
        /*
        ※ contains 메서드를 통해 상위 부모 요소가 위임 조상 핸들러에
            포함되는 여부를 측정함으로
            써 모든 예외 상황에 대응.
        */
        if(!nav.contains(eventOj)) return;
    }
    eventOj.style.backgroundColor = 'yellow';
});

nav.addEventListener('click', function(e) {
    const eventOj = e.target.closest('li');
    if (this.contains(eventOj)) {
        eventOj.style.backgroundColor = 'yellow';
    }
});