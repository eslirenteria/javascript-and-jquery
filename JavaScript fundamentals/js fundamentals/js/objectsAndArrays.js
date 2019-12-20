// constructor functions
function Car(id){
    this.carId = id;
}

let car = new Car(123);
console.log(car.carId);

// Methods
function Car2(id){
    this.carId = id;
    this.start = function(){
        console.log('car id: '+this.carId);
    }
}

let car2 = new Car2(123);
car2.start();

// prototypes
function Car3(id){
    this.carId = id;
}
Car3.prototype.start = function(){
    console.log('car id: '+this.carId);
}

let car3 = new Car3(123);
car3.start();

// expanding objects using prototypes
String.prototype.hello = function(){
    return this.toString() + ' hello';
}
console.log('Hi'.hello())

// js object notation - JSON
console.log(JSON.stringify(car));

let arrayExample = [
    {a: 1},
    {a: 2},
    {a: 3}
];
console.log(JSON.stringify(arrayExample));

let aes =` [
    {"a": 1},
    {"a": 2},
    {"a": 3}
]`;

let aesVar = JSON.parse(aes);
console.log(aesVar);
console.log(JSON.stringify(aesVar));

// Array Iteration
let keys = [
    { id: 1, name: 'a'},
    { id: 2, name: 'b'},
    { id: 3, name: 'c'},
    { id: 4, name: 'd'}
];
keys.forEach(key => console.log(key));
keys.forEach((key,index)=> console.log(key, index));

let b = keys.filter(
    key=>key.name === 'b'
);
console.log(b);

let allKeys = keys.every(
    key=>key.id > 0
);
console.log(allKeys);

let findKeys = keys.find(
    key=>key.id > 2
);
console.log(findKeys);