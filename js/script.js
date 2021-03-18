/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';
document.addEventListener('DOMContentLoaded', () => {


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
        movieList = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('form.add'),
        addInput = addForm.querySelector('.adding__input'),
        checkbox = addForm.querySelector('[type="checkbox"]');


    addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let newFilm = addInput.value; //то что ввел пользователь
        const favorite = checkbox.checked;

        if (newFilm){

            if (newFilm.length > 21){
                newFilm = `${newFilm.substring(0,22)}...`;
            }

            movieDB.movies.push(newFilm);

            // movieDB.movies.sort();  // сортировка по алфавиту
            sortArr(movieDB.movies);// сортировка по алфавиту

            //создание новых элементов на странице
            createMovieList(movieDB.movies, movieList);

        }


        //сброс что в поле было
        event.target.reset();


    });


    const deleteAdv = (arr) => {
        adv.forEach(item => {

            item.remove();
        })
    };



    const makeChanges = () => {
        // изменяем жанр текста
        genre.textContent = 'драма';

// поменяли картинку
        poster.style.backgroundImage = "url('img/bg.jpg')";
// Удаляем список фильмов
    };





// сортировка по алфавиту
    const sortArr = (arr) => {
        arr.sort()
    };




    function createMovieList(films, parent) {




        parent.innerHTML = "";

        films.forEach((film, i) => {
            parent.innerHTML += `
                          <li class="promo__interactive-item">${i + 1} ${film}
                            <div class="delete"></div>
                           </li>
                        `;
        });


        document.querySelectorAll('.delete').forEach((btn, i)=>{

           btn.addEventListener('click', ()=>{
               btn.parentElement.remove();
               movieDB.movies.splice(i, 1);// сплайс вырезает определенный элемент

               createMovieList(movieDB.movies, movieList)
           })
        });
    }


        createMovieList(movieDB.movies, movieList)
        deleteAdv(adv);//убрать все рекламные изображения
        makeChanges();
        sortArr(movieDB.movies);


});


