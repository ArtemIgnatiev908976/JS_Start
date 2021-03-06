'use strict';

const inputRub = document.querySelector('#rub'),
    inputUsd = document.querySelector('#usd');

inputRub.addEventListener('input', ()=>{
   const request = new XMLHttpRequest(); //конструктор который создает новый объект

    request.open('GET','js/current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();
    // событие отслеживает статус запроса в данный текущий момент
    request.addEventListener('load', ()=>{
if (request.status === 200){
    console.log(request.response)
    const data = JSON.parse(request.response);
    inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
} else{
    inputUsd.value ="Что то пошло не так"
}
    })

});