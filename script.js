

///1 задание
// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
// const personalMovieDB ={
//     count: numberOfFilms,
//     movies:{},
//     actors:{},
//     generals:[],
//     private: false
// };
//
//
//
//
//
// for(let i =0; i<2; i++){
//     const a = prompt('Один из последних просмотренных фильмов?',''),
//           b = prompt('На сколько оцените его?','');
//
//     if (a !=null && b !=null  && a!='' && b !='' && a.length < 50){
//
//         personalMovieDB.movies[a] = b;
//         console.log('done')
//     } else{
//         console.log('error');  // если не правильно заполнили все заного
//         i--;
//     }
//
//
//
// }
//
// if (personalMovieDB.count < 10){
//     console.log('Просмотрено довольно мало фильмов');
// }
// else if(personalMovieDB.count >=10 && personalMovieDB.count <30){
//     console.log('Вы класический зритель');
// }
// else if (personalMovieDB.count >=30){
//     console.log('Вы киноман');
// }
// else {
//     console.log('Произошла ошибка');
// }
//
//
//
//
// console.log(personalMovieDB)

//3 задание

// let num = 50;
// // while (num <= 55){
// //     console.log(num);
// //     num++;
// //
// // };
//
// // do {
// //     console.log(num);
// //     num++;
// // }
// // while (num <55);
//
// for (let i = 1; i <10;i++){
//   if(i===6){
//      continue;
//   }
//   console.log(i)
// "use strict"
//
// if(4 == 44 ) {
//
//     console.log('OK!')
// }
//
// else{
//     console.log('error');
// }
//
//
//
//
// //2 блок
//
//
// const num =50;
// // if (num < 49){
// //     console.log('error123')
// // }
// // else if (num > 100){
// //     console.log('Много')
// // }
// // else{
// //     console.log('ok!')
// // }
// //
// //
// // ///тернарный оператор, в его работе учавствуют 3 аргумента
// // (num === 50) ? console.log('ok') : console.log('Error');
//
//
//
// //свич строгое соответствие
//
// switch (num){
//     case 49:
//         console.log('Неверно');
//         break;
//
//     case 100:
//         console.log('Неверно');
//         break;
//
//     case 51:
//         console.log('в точку');
//         break;
//
//     default:
//         console.log('Не в этот раз');
//         break;
//
// }




// //Функция
// "use strict";
// let num = 20;
// function showFirstMessage(text){
// console.log(text);
// console.log(num)
// }
//
//
// showFirstMessage("hello");
// console.log(num);
//
// function calc(a,b){
//     return (a+b);
//
// }
//
// console.log(calc(4,3));
// console.log(calc(5,6));
//
//
// function ret(){
//     let num  =50;
//     return num;
//
// }
// const anotherNum = ret();
// console.log(anotherNum)
//
//
// const logger = function (){
//   console.log("hello")
// };
//
// logger();
//
//


const calc =(a,b) =>  {return a + b};
