$(document).ready(function(){
    $('#myButton').click(function(){
        //load html from helpDetails.html
        $('#outputDiv').load('HelpDetails.html #SubTOC');
    });

    $('#myButtonGet').click(function(){
        $.get('HelpDetails.html', function(data){
            $('#outputDiv').html(data);
        });
    });
});