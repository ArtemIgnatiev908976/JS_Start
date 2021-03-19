window.addEventListener('DOMContentLoaded', () =>{
const box = document.querySelector('.box');


// нажатие пальцем
box.addEventListener('touchstart', (e)=>{
    e.preventDefault();
    console.log('Start');
    console.log(e.touches); //количество пальцев на экране
    console.log(e.changedTouches); //пальцы которые совершили действие
});

// движение внутри блока
    box.addEventListener('touchmove', (e)=>{
        e.preventDefault();
        console.log(e.targetTouches[0].pageX);  // зажимаем и показывает координаты
    });

// отжатие пальца
    box.addEventListener('touchend', (e)=>{
        e.preventDefault();
        console.log('end');
    });



});


