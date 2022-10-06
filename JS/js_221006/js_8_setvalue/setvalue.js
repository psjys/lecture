'use strict';

function setValue1 (inputValue) {
    let value = inputValue || 'default Value';
    console.log(value);
}

setValue1('data');
setValue1(0);
setValue1('');
setValue1(NaN);
setValue1(null);
setValue1(undefined);
console.log('-----------------');

function setValue2(inputValue) {
    let value = inputValue ?? 'default Value';
    console.log(value);
}

setValue2('data');
setValue2(0);
setValue2('');
setValue2(NaN);
setValue2(null);
setValue2(undefined);