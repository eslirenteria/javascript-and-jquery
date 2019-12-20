// (a = ((b)*(2)));

// [[a] = [[ [b] * [2] ] +[ [foo]([c * [3]]) ]]];
let b = 3, c = 10;
a = b * 2 + foo(c * 3);
console.log(a);

function foo(parameter){
    return parameter / 2;
}

alert(a);

var age = prompt("What is your age?");
alert(age);