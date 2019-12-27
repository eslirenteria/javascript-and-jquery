/// <reference path="jquery-1.6.2.js" />
/// <reference path="jquery-ui-1.8.16.custom.js" />

$(function () {
    
    $("#target")
    .css("position", "relative")
    .click(function(){
        $(this).toggleClass("leftTarget", "slow");
    });
    /*
    $("#target")
    .css("position", "relative")
    .click(function(){
        $(this).animate({
            left: 300
        }, 1000, "easeInOutElastic")
    });

    $("#target")
    .click(function(){
        $(this).effect("explode",{pieces:16}, 2000, function(){
           alert("done"); 
        });
    });

    $("#target")
    .click(function(){
        $(this).animate({
             "width": "+=20",
             "height": "+=20",
             "background-color": "red"
         });
     });

     $("#target")
     .click(function(){
         $(this).effect("bounce") 
         });
     });
     */

    $("#draggables").children().draggable();

    $("#trash").droppable({
        activeClass: "opaque",
        drop: function (event, ui) {
            ui.draggable.hide("explode");
        }
    });
});
