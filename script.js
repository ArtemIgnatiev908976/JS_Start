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
}