'use strict';

function Car(model, color ) {
 this.model = model
 this.color = color
}

var car = new Car('BMW', 'White');
display('Model: ' + car.model);
display('Color: ' + car.color);
// display(car);


var bike = Object.prototype(Object.prototype,
{
  name: {
    value: 'Mountain',
    enumerable: true,
    writable: true,
    configurable: true 
  },
  color: {
    value: 'Black',
    enumerable: true,
    writable: true,
    configurable: true
  }
});

class Car2{
  constructor(model, color){
    this.model = model,
    this.color = color
  }

  motor(){
    display('1.4');
  }
}

var car2 = new Car2('nissan', 'red');
display(car2);
car2.motor();