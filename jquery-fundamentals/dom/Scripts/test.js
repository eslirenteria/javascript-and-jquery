$(document).ready(function(){
    var html = '';
    $('div.BlueDiv,div.RedDiv').each(function(index){
        html += "</br>" + index + " - " + $(this).text();
    });
    var outPut = $('#OutputDiv');
    outPut.html(html);

    $('div.BlueDiv,div.RedDiv').attr(
        {
            title: 'title example',
            style: 'background-color:black'
        }
    ).css({'font-size':'14pt',
           'color'    : 'white'});

    var tbl = $('#tableContainerDiv');
    tbl.append('<span style="background-color:green"> Appended child 1</span>')
    tbl.prepend('<span style="background-color:green"> Prepended child 1</span>')
    $('</br><span style="background-color:green"> Appended child 2</span>').appendTo(tbl);

    // wrap
    $('span.foo').wrap('<div class="RedDiv ParentWrapper" />')
    $('div.ParentWrapper').each(function(){
        alert($(this).html());
    });

    //Remove
    $('div.ParentWrapper').remove();

    //class function
    $('input[type="text"]').addClass('Highlight');
    $('#LastNameTextBox').removeClass('Highlight');

});