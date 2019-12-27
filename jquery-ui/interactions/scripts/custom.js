// <reference path="jquery-1.6.2.js" />
// <reference path="jquery-ui-1.8.16.custom.js" />
$(document).ready(function(){

    // $("#draggables").children().draggable();
    $("#d1").draggable({/*axis: "x"*/ revert: "invalid"});
    $("#d2").draggable({snap: "#d1, #d3"});
    $("#d3").draggable(/*{containment: "#draggables", handle: "header"}*/);
    $("#d3").resizable();

    $("#d1, #d2, #d3").draggable(
        "option", "stack", ".ui-draggable"
    );

    $("#trash").droppable({
        activeClass: "opaque",
        accept: "#d2",
        drop: function(event, ui){
            ui.draggable.fadeOut(function(){
                ui.draggable.remove();
            });//.remove();
        }
    });

    $("#sortable").sortable({
        placeholder: "placeholder"
    });

});
