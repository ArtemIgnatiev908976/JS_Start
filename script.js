"use strict";

// 1)
console.log(typeof(String(null)));
console.log(typeof(String(4)));



console.log(typeof((5+'')));


const num =5;
console.log("htpps://vk.com/catalog/" +num);


const fontSize = 26 + 'px';

// to number

// 1)
console.log(typeof(Number('4')));

//2)
console.log(typeof(+'5'));

//3)

console.log(typeof(parseInt("15px", 10)));


// let answ = +prompt("Hello", "");

// to boolean

//1)

let switcher = 1;
if (switcher){
    console.log('Working');
}

//2)
console.log(typeof (Boolean(+'5')));

//3)
console.log(typeof (!!"4444"));