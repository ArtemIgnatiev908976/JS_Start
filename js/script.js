/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};


//убрать все рекламные изображения
const adv = document.querySelectorAll('.promo__adv img'),
      poster = document.querySelector('.promo__bg'),
      genre = poster.querySelector('.promo__genre'),
      movieList = document.querySelector('.promo__interactive-list');



adv.forEach(item => {

    item.remove();
})
//убрать все рекламные изображения

// изменяем жанр текста
genre.textContent ='драма';

// поменяли картинку
poster.style.backgroundImage = "url('img/bg.jpg')";
// Удаляем список фильмов
movieList.innerHTML = "";
// сортировка по алфавиту
movieDB.movies.sort();
//вывод списка фильмов и их нумерация
movieDB.movies.forEach((film, i)=>{
   movieList.innerHTML += `
                          <li class="promo__interactive-item">${i+1} ${film}
                            <div class="delete"></div>
                           </li>
                        `;
});

