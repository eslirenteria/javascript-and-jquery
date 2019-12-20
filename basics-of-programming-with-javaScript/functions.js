var a = 10;

function foo(b){
    a = a * 2;
    a = a + b;
    return a / 2
}

var a = 10;
var b = foo(3);

console.log(a);
console.log(b);