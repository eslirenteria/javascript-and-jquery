//Function scope
function startCar(carId){
    let message = 'Starting***';
    let startFn = function turnKey(){
        console.log(message);
    }
startFn();
}
startCar(123);

// Block scope
let message = 'Outside'; 
if(5===5){
    let message = 'Equal';
}
console.log(message); //out of scope

// Block scope
if(5===5){
    var message1 = 'Equal';
}
console.log(message1); //out of scope

// IIFE's - Immediately invoked function expression
let app = (function(){
    console.log('Immediately Onvloked Function Expression');
    return{};
})();
console.log(app);

// Closure
let app2 = (function(){
    let carId = 123;
    let getId = function(){
        return carId;
    };
    return{
        getId: getId
    };
})();
console.log(app2.getId());

//The 'this' keyword
let fn = {
    carId: 123,
    getId: function(){
        console.log(this);
        return this.carId;
    }
};
console.log(fn.getId());

// call and apply
//call

let o = {
    carId: 123,
    getId: function(){
        return this.carId;
    }
};
let newCar = {
    carId: 456
}
console.log(o.getId.call(newCar));

//apply is the same as call but apply allow parameters
let a = {
    carId: 123,
    getId: function(prefix){
        return prefix + this.carId;
    }
};
let newCar2 = {
    carId: 456
}
console.log(a.getId.apply(newCar2, ['ID: ']));

//bind
let b = {
    carId: 123,
    getId: function(){
        return this.carId;
    }
};
let newCar3 = {
    carId: 456
}
let newFn = b.getId.bind(newCar3);
console.log(newFn());

// Arrow functions

let arrowFun = () => 123;
console.log(arrowFun());

let arrowFunPara = (p) => p + 123;
console.log(arrowFunPara('e'));

// Default parameters
let trackCar = function(idx, city='Nay'){
    console.log(`Tracking ${idx} in ${city}.`);
}
console.log(trackCar(1));
console.log(trackCar(1, 'TPC'));

