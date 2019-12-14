let paragraph = document.getElementById('text-area');
paragraph.innerHTML = "This is an paragraph text using DOM";

let button = document.getElementById('ok-button');

button.addEventListener('click', function(){
    alert("You click me");
})

paragraph.style.display = 'none'; //to remove the element
paragraph.style.display = 'block'; //to show again
