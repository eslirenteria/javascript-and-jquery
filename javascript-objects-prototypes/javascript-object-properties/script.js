'use strict';

var person = {
    name: {first: 'José', last: 'Gonzalez'}, 
    nationality: 'Mexican'
}

// Object.defineProperty(person, 'name', {configurable: false});
// Object.defineProperty(person, 'name', {enumerable: false});

// for(var propertyName in person){
//   display(propertyName + ': ' + person[propertyName]);
// }
// display(Object.keys(person));
// display(JSON.stringify(person));


Object.defineProperty(person, 'fullName', 
  {
    get: function() {
      return this.name.first + ' ' + this.name.last
    },
    set: function(value) {
      var nameParts = value.split(' ');
      this.name.first = nameParts[0];
      this.name.last = nameParts[1];
    }
  })

person.fullName = 'Edwin Camberos'
display(person.fullName);
display(person.name.first);
display(person.name.last);
