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