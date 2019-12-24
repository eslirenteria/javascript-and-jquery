'use strict';

/*var arr = [1, 2, 3];
Object.defineProperty(Array.prototype, 'last', {get: function(){
  return this[this.length-1]
}})

var last = arr.last;
display(last);
*/

/*
var myFunction = function(){

}
display(myFunction.prototype);
display(myFunction.__proto__);
*/

// function Cat(name, color){
//   this.name = name,
//   this.color = color
// }

// Cat.prototype.age = 4;

// var fluffy = new Cat('Fluffy', 'White');
// var muffin = new Cat('Muffin', 'Brown');

// Cat.prototype.age = 2;
// display(Cat.prototype);
// display(fluffy.__proto__);
// display(fluffy.hasOwnProperty('age'));

// display(fluffy.age);
// display(muffin.age);

/*
function Animal(voice){
this.voice = voice || 'grunt'
}
Animal.prototype.speak = function(){
  display(this.voice);
}

function Cat(name, color){
  Animal.call(this, 'Meow');
  this.name = name;
  this.color = color;
}

Cat.prototype = Object.create(Animal.prototype);

var fluffy = new Cat('Flussy', 'White');
display(fluffy);
fluffy.speak();
*/

class Animal {
  constructor(voice) {
    this.voice = voice || 'grunt'
  }
  
  speak() {
    display(this.voice)
  }
}

class Cat extends Animal {
  constructor(name, color) {
    super('Meow')
    this.name = name
    this.color = color
  }
}

var fluffy = new Cat('Fluffy', 'White')
display(fluffy);
display(Object.keys(fluffy.__proto__.__proto__))
display(fluffy.__proto__.__proto__.hasOwnProperty('speak'))
