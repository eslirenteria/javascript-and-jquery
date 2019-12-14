let value = "apple";
console.log(typeof(value));

let flag = false;
console.log(flag);
console.log(typeof(flag));

let flagU;
console.log(flagU);
console.log(typeof(flagU));


let values = [0, 10, 1, "3", "hello"];
for (let i = 0; i < values.length; i++){
    console.log(values[i]);
    console.log(typeof(values[i]));
}

let testArray = [];
//push to add values to the array like a stack
testArray.push(0);
testArray.push(10);
testArray.push(1);
testArray.push("3");
testArray.push("hello");

let lastDeleted = testArray.pop(); //pop remove the last value from a stack
let firstDeleted = testArray.shift();
console.log(lastDeleted);
console.log(firstDeleted); 
console.log(testArray)
console.log(testArray.splice(1 , 1)); //remove by position(position, number of values);
console.log(testArray)
