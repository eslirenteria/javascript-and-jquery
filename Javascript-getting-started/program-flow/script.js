/*conditionals if*/

if(5 === 5){
    console.log('yes');
}

if(5 > 5){
    console.log('no');
}

if(5 >= 5){
    console.log('yes');
}

let score = 1000;
if(score >= 1000){
    score = score + 100;
}
console.log("The score is: " + score);

/*if else*/

let score = 900;
if(score >= 1000){
    score = score + 100;
}else if(score == 900){
    score = score * 0.5;
}else{
    score = 1000 - 100;
}
console.log("The score is: " + score);

/*switch and case*/

let state = 'NAY';

switch(state){
    case 'CDMX':
        console.log('Ciudad de México');
        break;
    case 'NAY':
        console.log('Nayarit');
        break;
    default: 
        console.log('Unknown');
        break;
}

/*Looping with for*/
let values = [0, 10, 1, "3", "hello"];
for (let i = 0; i < values.length; i++){
    console.log(values[i]);
    console.log(typeof(values[i]));
}

 /*while loop*/
let count = 1;
while(count <= 10){
    console.log(count);
    count ++;
}