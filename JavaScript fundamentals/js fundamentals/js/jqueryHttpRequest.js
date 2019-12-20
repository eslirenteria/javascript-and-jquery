import $ from 'jquery';
let promise = $.get("http://myid.mockapi.io/api/v1/users");
promise.then( 
    data => console.log('data: ', data),
    error => console.log('error: ', error)
);