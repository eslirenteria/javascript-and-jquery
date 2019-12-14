/*Objects*/

let person = {
    name: 'Jossué',
    age: 24,
    sex: 'M'
};

console.log(person.name, person.age, person.sex);

/**arrays of objects */
let cards = [
    {
        suit: 'Hearts',
        value: 'Queen'
    }, 
    {
        suit: 'Clubs',
        value: 'King'
    }
];

console.log(cards[1].suit);

/** JS built-in objects*/

//math objects
let result = Math.random()*50;
result = Math.trunc(result);
console.log(result);

//Date objects
let result = new Date;
console.log(result);

//String objects
let result = "hello world"
console.log(result.toUpperCase());

//Numbre objects
let result = 0 / 0;
console.log(Number.isNaN(result));


