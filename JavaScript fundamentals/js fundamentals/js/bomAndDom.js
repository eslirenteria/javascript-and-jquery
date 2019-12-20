//The windows objects
/**
 * properties:
 * document
 * location
 * console
 * innerHeight
 * innerWidth
 * pageXOffset
 * pageYOffset
 * 
 * Methods:
 * alert()
 * back()
 * confirm()
 * 
 * Events():
 * (not common)
 */

 console.log(innerWidth);

//  Timers
let intervalId = setInterval( function(){
    console.log('1 second passed');
}, 1000);
clearInterval(intervalId);// to cancel

// The location object
/**
 * Properties: 
 * href
 * hostname
 * port
 * pathname
 * search
 * 
 *  Methods:
 * assign()
 * reaload()
 * 
 * Events:
 * (no common)
 */
console.log(document.location.href)

// The document object
/**
 * properties:
 * body
 * forms
 * links
 * 
 * Methods:
 * createElement()
 * createEvent()
 * getElemntById()
 * getElementsByClassName()
 * 
 * Events:
 * onload
 * onclick
 * onkeypress
 */

 let header = document.getElementById('headerid');
header.classList.add('classExample');
 console.log(header);
