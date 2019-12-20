window.foo = 'secret code';
//don't store passwords, secrets or other sensitivve information
//dont use global variables
//assume hackers can read your code and access all data sent to a browser

let inputString = "console.log('Hello');";
eval(inputString);

// use SSL
// Use HTTP header: Strict-transport-security
// Use cookie attribytes: secure and httpOnly
// Use CSP
// CORS