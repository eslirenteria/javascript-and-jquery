//class basics
/*class Car{

}

let car = new Car();
console.log(car);*/

//constructors and properties
/*class Car{
 constructor(id){
     this.id = id;
 }
}

let car = new Car(123);
car.id = 1;
console.log(car.id);*/

// methods
/*class Car{
    constructor(id){
        this.id = id;
    }
    identify(x){
        return `car id: ${this.id} ${x}`;
    }
}

let car = new Car(123);
console.log(car.identify('!'));*/

// inheritances
/*class Vehicle{
    constructor(){
        this.type = 'car';
    }
    start(){
        return `starting: ${this.type}`;
    }
}

class Car extends Vehicle{
    constructor(){
        super();
    }
    start(){
        return 'in Cars start '+super.start();
    }
}
let car = new Car();
console.log(car.start());*/

// creating a module
// /models/car.js
/*let car = new Car();
console.log(car.id);
*/
// importing modules

import {Car} from './models/car.js';

let car = new Car();
console.log(car.id);