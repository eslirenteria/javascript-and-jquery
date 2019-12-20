// Equality operators
let i = 0;
let sI = '0';
if (i==sI){ //dont matters the type of var
    console.log(true);
}
if (i===sI){//do matters the type of var
    console.log(true);
}

//unary operators

let year = 2019;
console.log(year++);
console.log(year);

let year2 = 2019;
console.log(year2--);
console.log(year2);

let year3 = '2019';
console.log(-year3);
let year4 = '-2019';
console.log(-year4);

// Logical operators
// &&
// ||
// !

if(5 === 5 && 6 ===6){
console.log(true);
}
if(5 === 2 || 6 ===6){
    console.log(true);
}
if(5 === 2 && 6 ===6){
    console.log(true);
}

let userSettings = {name: 'J'};
let defSettings = {name: 'd'};
console.log(userSettings||defSettings);
console.log(userSettings&&defSettings);

console.log(!true);

//Relational operators
// > < >= <=

let s1 = 'Zoo';
let s2 = 'alphabet';
if(s1 < s2){
    console.log(true);
}else{
    console.log(false);
}
if(s1.toUpperCase() < s2.toUpperCase()){
    console.log(true);
}else{
    console.log(false);
}

//Conditional operator
console.log( 2 < 4 ? 'yes' : 'no');

// Assignment operators
let var1 = 10;
var1 += 10;
console.log(var1);
var1 -= 5;
console.log(var1);
var1 <<= 1;
console.log(var1);
