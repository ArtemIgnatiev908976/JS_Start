//
//
// ///1 задание
// // const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
// // const personalMovieDB ={
// //     count: numberOfFilms,
// //     movies:{},
// //     actors:{},
// //     generals:[],
// //     private: false
// // };
// //
// //
// //
// //
// //
// // for(let i =0; i<2; i++){
// //     const a = prompt('Один из последних просмотренных фильмов?',''),
// //           b = prompt('На сколько оцените его?','');
// //
// //     if (a !=null && b !=null  && a!='' && b !='' && a.length < 50){
// //
// //         personalMovieDB.movies[a] = b;
// //         console.log('done')
// //     } else{
// //         console.log('error');  // если не правильно заполнили все заного
// //         i--;
// //     }
// //
// //
// //
// // }
// //
// // if (personalMovieDB.count < 10){
// //     console.log('Просмотрено довольно мало фильмов');
// // }
// // else if(personalMovieDB.count >=10 && personalMovieDB.count <30){
// //     console.log('Вы класический зритель');
// // }
// // else if (personalMovieDB.count >=30){
// //     console.log('Вы киноман');
// // }
// // else {
// //     console.log('Произошла ошибка');
// // }
// //
// //
// //
// //
// // console.log(personalMovieDB)
//
// //3 задание
//
// // let num = 50;
// // // while (num <= 55){
// // //     console.log(num);
// // //     num++;
// // //
// // // };
// //
// // // do {
// // //     console.log(num);
// // //     num++;
// // // }
// // // while (num <55);
// //
// // for (let i = 1; i <10;i++){
// //   if(i===6){
// //      continue;
// //   }
// //   console.log(i)
// // "use strict"
// //
// // if(4 == 44 ) {
// //
// //     console.log('OK!')
// // }
// //
// // else{
// //     console.log('error');
// // }
// //
// //
// //
// //
// // //2 блок
// //
// //
// // const num =50;
// // // if (num < 49){
// // //     console.log('error123')
// // // }
// // // else if (num > 100){
// // //     console.log('Много')
// // // }
// // // else{
// // //     console.log('ok!')
// // // }
// // //
// // //
// // // ///тернарный оператор, в его работе учавствуют 3 аргумента
// // // (num === 50) ? console.log('ok') : console.log('Error');
// //
// //
// //
// // //свич строгое соответствие
// //
// // switch (num){
// //     case 49:
// //         console.log('Неверно');
// //         break;
// //
// //     case 100:
// //         console.log('Неверно');
// //         break;
// //
// //     case 51:
// //         console.log('в точку');
// //         break;
// //
// //     default:
// //         console.log('Не в этот раз');
// //         break;
// //
// // }
//
//
//
//
// // // //Функция
// // "use strict";
// // let num = 20;
// // function showFirstMessage(text){
// // console.log(text);
// // console.log(num)
// // }
// //
// //
// // showFirstMessage("hello");
// // console.log(num);
// //
// // function calc(a,b){
// //     return (a+b);
// //
// // }
// //
// // console.log(calc(4,3));
// // console.log(calc(5,6));
// //
// //
// // function ret(){
// //     let num  =50;
// //     return num;
// //
// // }
// // const anotherNum = ret();
// // console.log(anotherNum)
// //
// //
// // const logger = function (){
// //   console.log("hello")
// // };
// //
// // logger();
// //
// //
// //
// //
// // const calc =(a,b) =>  {return a + b};
//
// // const str = "teSt";
// //
// // console.log(str.toLocaleUpperCase());
// // console.log(str.toLocaleLowerCase());
// //
// //
// // let fruit ="Some fruit";
// //
// // console.log(fruit.indexOf("fruit"))
// //
// //
// // const logg = "Hello world";
// //
// // console.log(logg.slice(6, 12 ));
// // console.log(logg.substring(6, 12 ));
// // console.log(logg.substr(6, 5 ));
// //
// //
// // const num = 12.2242424;
// //
// // console.log(Math.round(num))
// //
// //
// //
// // const test = "12.2123px";
// // // console.log(parseInt(test));
// // console.log(parseFloat(test));
//
// // ///1 задание
// // let numberOfFilms ;
// //
// //
// // function start(){
// //
// //
// //
// //     while (numberOfFilms=='' || numberOfFilms == null || isNaN(numberOfFilms)){
// //         numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
// //
// //     }
// //
// // }
// // start();
// //
// //
// // const personalMovieDB ={
// //     count: numberOfFilms,
// //     movies:{},
// //     actors:{},
// //     generals:[],
// //     private: true
// // };
// //
// //
// //
// //
// //
// //
// //
// //
// // function rememberMyFilms(){
// //
// //     for(let i =0; i<2; i++){
// //
// //         const a = prompt('Один из последних просмотренных фильмов?',''),
// //             b = prompt('На сколько оцените его?','');
// //
// //         if (a !=null && b !=null  && a!='' && b !='' && a.length < 50){
// //
// //             personalMovieDB.movies[a] = b;
// //             console.log('done')
// //         } else{
// //             console.log('error');  // если не правильно заполнили все заного
// //             i--;
// //         }
// //
// //
// //
// //     }
// //
// //
// // }
// //
// // rememberMyFilms();
// //
// //
// //
// //
// //
// //
// // function detectPersonalLevel(){
// //     if (personalMovieDB.count < 10){
// //         console.log('Просмотрено довольно мало фильмов');
// //     }
// //     else if(personalMovieDB.count >=10 && personalMovieDB.count <30){
// //         console.log('Вы класический зритель');
// //     }
// //     else if (personalMovieDB.count >=30){
// //         console.log('Вы киноман');
// //     }
// //     else {
// //         console.log('Произошла ошибка');
// //     }
// //
// // }
// //
// // detectPersonalLevel();
// //
// //
// //
// //
// // function showMyDB(hidden){
// // if(!hidden){
// //     console.log(personalMovieDB.private)
// // }
// //
// // }
// //
// // showMyDB(personalMovieDB);
// //
// // function writeYouGenerals(){
// //     for (let i = 1; i <= 3; i++){
// //         const genre = prompt(`Ваш любимый жанр под номером ${i}`);
// //        personalMovieDB.generals[i-1] = genre;
// //     }
// // }
// //
// // writeYouGenerals();
// //
// //
// //
//
// //
// // function first(){
// //     setTimeout(function (){
// //
// //         console.log(1);
// //
// //     }, 500);
// // }
// //
// // function second(){
// //     console.log(2);
// // }
// //
// // first();
// // second();
//
// // function learnJS(lang,callback){
// //     console.log(`Я учу: ${lang}`)
// //     callback();
// //
// // }
// //
// // function done(){
// //     console.log('Z ghjitk ')
// // }
// //
// //
// // learnJS('javascript', done);
//
// "use strict"
//
// const arr =[1,2,3,4,5,6,8,10];
//
// arr.sort(compareNum);
// console.log(arr);
//
//
// function  compareNum (a, b){
//     return a-b;
// }
//
// // arr.pop()    // удаляет последний элемент из массива
//
// // arr.push(10);// добавляет элемент
// // console.log(arr)
//
//
//
// // for (let i=0; i<arr.length; i++){
// //
// //     console.log(arr[i]);
// //
// // }   // перебор
// //
// // for (let value of arr){
// //     console.log(value);
// // }
// //
// //
// //
// // arr.forEach(function(item, i, arr){
// //     console.log(`${i}: ${item} внутри массива ${arr}`)
// // })
//
//
//
// const str = prompt ("", "")
// const products = str.split(", ");
//
// products.sort();
// console.log(products.join('; '));
//

//
// let a = 5,
//     b=a;

const obj ={
    a:5,
    b:1
}
//
// const copy = obj; //сссылка на обьект и изменяем изначальный объект (передача по ссылке)
//
// copy.a = 10;
// console.log(copy);
// console.log(obj);

function copy(mainObj){
    let objCopy ={};

    let key;
    for (key in mainObj){
        objCopy[key]= mainObj[key];
    }

    return objCopy;
}

const numbers = {
    a:2,
    b:5,
    c:{
        x:7,
        y:4
    }
};


const newNumbers = copy(numbers);

newNumbers.a = 10;
newNumbers.c.x= 10;

// console.log(newNumbers);
// console.log(numbers);

const add = {
    d:17,
    e:20
};

const clone =  Object.assign({}, add);
clone.d = 20;
console.log(add);
console.log(clone);

//Третий метод
const oldArray =['a', 'b', 'c'];
const newArray = oldArray.slice();


newArray[1]='asdasdasd'
console.log(newArray);
console.log(oldArray);

//4
const video =['youtube','vimeo','rutube'],
    blogs=['wordpress','livejornal','bloger'],
    internet = [...video, ...blogs,'vk','facebook'];

console.log(internet);





//5
function log(a,b,c){
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2,5,7];

log(...num)


const array =["a","b"];

const newAaray=[...array];

const q={
    one:1,
    two:2,
}

const newObj = {...q};
