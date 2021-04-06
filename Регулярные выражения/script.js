'use strict';

// new RegExp('pattern', 'flags')
//
// /patter/f


const ans = prompt('введите ваше число');

const reg = /\d/g;

console.log(ans.match(reg))


const str = "my mane is R2D2";
console.log(str.match(/\W/ig));

// console.log(ans.search(reg));
// console.log(ans.match(reg));

// const pass = prompt('Password');
// console.log(pass.replace(/./g,"*"))

// console.log('12-34-56'.replace(/-/g, ':'))

