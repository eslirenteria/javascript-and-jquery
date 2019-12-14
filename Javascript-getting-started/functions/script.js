//functions
function showMessage(){
    console.log('Message from my function');
};
showMessage();

//with parametter
function showMessageWithParameter(p){
    console.log(p);
}
showMessageWithParameter('Hi');

//with returns
function showMessageWithReturn(p){
    let newValue = p + p + p;
    return newValue;
}
console.log(showMessageWithReturn(2));

