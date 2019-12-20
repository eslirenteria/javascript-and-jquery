//try carch
try{
    let car = newCar;
}catch(error){
    console.log('error: ', error);
}
//finally
finally{
    console.log('continue...');
}
console.log('hi');

//Develper developer defined error
try{
    throw new Error('my custom error');
}catch(error){
    console.log('error: ', error);
}finally{
    console.log('continue');
}
 
// Creating a promise
let promise = new Promise(
    function(resolve, reject){
        setTimeout(resolve, 100, 'valueX');
    }
);
//
// set promise = new Promise(
//     function(resolve, reject){
//         setTimeout(reject, 100, 'valueX');
//     }
// );
// console.log(promiseR);
//
let prom = new Promise(
    function(resolve, reject){
        setTimeout(reject, 100, 'valueX');
    }
);
prom.then(
    value => console.log('fulfilled: ' + value),
    error => console.log('rejected: ' + error)
);

