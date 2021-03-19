const btns = document.querySelectorAll('button');

const wrapper = document.querySelector('.btn-block');
// // console.log(btns[0].classList.length);
// // console.log(btns[0].classList.item(0));
// console.log(btns[1].classList.add('red', 'asdasd')); // добавляет класс
// // console.log(btns[0].classList.remove('blue')); // удаляет класс
// console.log(btns[0].classList.toggle('blue'));  // если класса нет добавляет если нет убирает
//
// if (btns[1].classList.contains('red')){
//     console.log('red');
// }

// проверяем  второй кнопки наличие класса ред и что такого класса нет
btns[0].addEventListener('click', ()=>{
//    if (!btns[1].classList.contains('red')){
//        btns[1].classList.add('red');
//
//    } else{
//        btns[1].classList.remove('red');
//    }
// //если класса нет то добавляем

    btns[1].classList.toggle('red')

});


// делегирование  делегируем действие на потомков
wrapper.addEventListener('click', (event)=>{
   if(event.target && event.target.matches('button.red')){
       console.log('hello')
   }



});

btns.forEach(btn => {
    btn.addEventListener('click', ()=>{
        console.log('hello')
    })
})


const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);


