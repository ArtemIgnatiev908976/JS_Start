'use strict'

//filter

//1
// const names =['Ivan', 'Ann', 'Ksenia', 'Voldemart'];
//
// const shortNames = names.filter(function (name){
//     return name.length < 5;
// });
// console.log(shortNames)
//1


//2 map взять новый массив и изменить его

// const  answers = ['IvAn', 'AnnF', 'Hello']
//
//
// const result = answers.map(item => item.toLocaleLowerCase());
//
//
// console.log(result)
//2 map взять новый массив и изменить его

//3 every/some


const some =[4, 'qwq', 'sdfsfdsdf']

// console.log(some.some(item =>typeof(item)==='number'))  // если хоть одно число true


// console.log(some.every(item =>typeof(item)==='number'))  // если все элементы число
//3 every/some

//4 reduce собирать массив в одно единое целое


// const arr =[4,5,23,3,2,2,23,4,5,7]
//
//
//
// const res = arr.reduce((sum, current)=> sum + current)
//
// console.log(res)

// const arr =['apple', 'pear', 'plum'];
//
// const res = arr.reduce((sum, current)=> `${sum}, ${current}`)
// console.log(res);

//4 reduce



const obj ={
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal'
};

const newArr = Object.entries(obj)
    .filter(item => item[1] === 'persone')
    .map(item => item[0]);

console.log(newArr)