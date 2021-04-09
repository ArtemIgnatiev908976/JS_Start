'use strict';

function User(name, age){
    this.name = name;
    this.age = age;


    this.say = function (){
        console.log(`Имя пользователя: ${this.name}, возраст ${this.age}`)
    };

}


const ivan = new User('Ivan, 27');

console.log(ivan.name);
console.log(ivan.age);

ivan.age = 30;
ivan.name = 'Alex';

ivan.say();