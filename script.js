
//
// ///1 задание
// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
// const personalMovieDB ={
//     count: numberOfFilms,
//     movies:{},
//     actors:{},
//     generals:[],
//     private: false
// };
//
// const a = prompt('Один из последних просмотренных фильмов?',''),
//       b = prompt('На сколько оцените его?',''),
//       c = prompt('Один из последних просмотренных фильмов?',''),
//       d = prompt('На сколько оцените его?','');
//
// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;
//
// console.log(personalMovieDB)

//3 задание

let num = 50;
// while (num <= 55){
//     console.log(num);
//     num++;
//
// };

// do {
//     console.log(num);
//     num++;
// }
// while (num <55);

for (let i = 1; i <10;i++){
  if(i===6){
     continue;
  }
  console.log(i)
"use strict"

if(4 == 44 ) {

    console.log('OK!')
}

else{
    console.log('error');
}




//2 блок


const num =50;
// if (num < 49){
//     console.log('error123')
// }
// else if (num > 100){
//     console.log('Много')
// }
// else{
//     console.log('ok!')
// }
//
//
// ///тернарный оператор, в его работе учавствуют 3 аргумента
// (num === 50) ? console.log('ok') : console.log('Error');



//свич строгое соответствие

switch (num){
    case 49:
        console.log('Неверно');
        break;

    case 100:
        console.log('Неверно');
        break;

    case 51:
        console.log('в точку');
        break;
        
    default:
        console.log('Не в этот раз');
        break;

}