// import '../styles/index.scss';

console.log('hello papucho');

//constants
const cardId = 12;
// cardId = 1; //error becouse it is a constat

//let and var

if(true){
    let cardId = 12;
}
console.log(cardId);

if(true){
    var Id = 12;
}
console.log(Id);

//rest parameters
function sendCards(day, ...cardsIds){
    cardsIds.forEach( id => console.log(id));
}
sendCards('monday',100, 200, 111);

//Destructurin arrays
let example = ['a', 'b', 'c'];
let [a,b,c] = example;
console.log(a,b,c);

let example2 = ['a', 'b', 'c'];
let i, j;
[i, ...j] = example2;
console.log(i,j);

let example3 = ['a', 'b', 'c'];
let x, y;
[, ...y] = example3;
console.log(x,y);
 
//Destructuring objects
let car = {
    id : 5,
    style: 'sedan' 
};

let {
    id, style
} = car;
console.log(car.id, car.style);

// let x = {
//     id : 5,
//     style: 'sedan' 
// };
// let id, style;
// ({id, style} = x);

// console.log(id, style);



//Spread Syntax
function startCars(car1, car2, car3){
    console.log(car1, car2, car3);
}
let carId = [1,2,3];
startCars(...carId);

function sts(q, w, e, ...rest){
    console.log(q, w, e,rest);
}
let array = [1,2,3,4,5,6];
sts(...array);

//typeof()
console.log(typeof('x'));
console.log(typeof(1));
console.log(typeof(array));
console.log(typeof(true));

//common type of conversions

//to string
let r = 1;
console.log(r.toString());
let n = '1';
console.log(parseInt(n));
console.log(parseFloat(n));
