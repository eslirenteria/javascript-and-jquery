// <reference path="jquery-1.6.2.js" />
// <reference path="jquery-ui-1.8.16.custom.js" />
$(document).ready(function(){

    $("#dialog").dialog({
        autoOpen: false,
        modal: true,
        resizable: false,
        draggable: false, 
        position: "top",
        buttons:{
            "Yes": function(){
                $("#dialog").dialog("close");
                $('#dialogDecision').text("You close it");
            },
            "No": function(){}
        }
    });
    $("#openDialog").click(function(){
        $("#dialog").dialog("open");
    });

    $("#progress").progressbar({
        value: 100
    });

    var value = 0;
    countdown();
    function countdown(){

        $("#progress").progressbar("option", "value", value);
        $("#countdown").text(value);

        value ++; 
        if(value >= 0 && value <= 100){
            setTimeout(countdown, 101);
        } 
        else {
            $("#countdown").text("completed");
            $("#progress").progressbar("disable");//hide();
        }
    }

    $("#slider").slider({
        min: 0,
        max: 100,
        value: 100,
        slide: function(event, ui){
            $("#slider").prev().css({ opacity: ui.value / 100 });
            
        }
    });

    $("#tabs").tabs();

    $("#accordian").accordion({
        autoHeight: false,
        collapsible: true,
        change: function(event, ui){
            console.log(event),
            console.log(ui);
        }
    });

    var mexicanCandies = ["Almohadas","Antaño","Barquillos","Barras para rebanadas","Besos","Bicicletas","Bigotes","Birotes","Bisquets","Bocados","Bolillos","Budín","Burritas","Calabazas","Calvos","Canastas","Caracoles","Chafaldrana","Chicharrones","Chilindrinas","Chirimoyas","Chirindolfo","Cocoles","Colchones","Conchas","Congal","Cuernos de mantequilla","Cuernos de vapor","Churros","Donas","Elotes","El Doroteo","Galletas de coco","Gendarmes","Guarapo","Gusanos","Gusarapo","Hojaldras","Ladrillos","Manitas","Mexicanos","Moños de danés","Mundos","Neblinas","Novias","Orejas","Pachucos","Pan catarino","Pan de caja","Pan de elote","Pan de feria","Pan de muerto","Pan de pueblo","Pan de pulque","Pan de royal","Pan de trenzas de sal","Pan de yema","Pan decorado con letras","Pan en forma de corazón","Pan en forma de tornillo","Pan integral con salvado","Pan mestizo","Pan redondo bordado","Pan redondo o moreliano","Pan típico de nuez","Panquecitos","Piedras","Rebanadas","Rehiletes","Rieles","Rosca de reyes","Roscas de canela","Cemitas","Soles","Tanas","Teleras","Trenzas","Yolandas","Yoyos"];

    $("#search").autocomplete({
        source: mexicanCandies
    });

    $("#buttons").children()
                 .button(
                     {
                        icons: {
                            primary: "ui-icon-search", 
                            secondary: "ui-icon-wrench"
                           }
                     })
                 .click(function(){
                    alert($(this).val());
                 });

    $("#radios").buttonset();
    $("#checks").buttonset();

    $("#dateselection").datepicker({
        showAnim: "bounce",
        numberOfMonths: 2,
        showWeek: true,
        changeMonth: true,
        changeYear: true,
        showButtonPanel: true,
        minDate: new Date(2008, 1 - 1, 1),
        maxDate: new Date(2020, 12 - 1, 31)
    });
    $("#dateselection").datepicker("setDate", new Date(2019, 12 - 1, 31));

});
