'use strict';

const box = document.querySelector('.box');
const btn = document.querySelector('button')

// const width = box.clientWidth;
// const height = box.clientHeight;


const width = box.scrollWidth;
const height = box.scrollHeight;

console.log(width,height)

btn.addEventListener('click', ()=> {
    // box.style.height = box.scrollHeight + '.px';
    // console.log(box.scrollTop);  // сколько текста прочиталось
})


console.log(box.getBoundingClientRect().top);  // координаты элемента

const style = window.getComputedStyle(box);  // получиться все стили элемента

console.log(style.display)