'use strict';

let id;

id = prompt(`주민번호 :`);

if (id.includes('-')) {
    if (confirm(`하이픈을 공백으로 변경 원하십니까?`)) {
        id = id.replace('-', ' ');
    }
}
alert(id);
