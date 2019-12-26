$(document).ready(function () {
    WireEvents();
});

function WireEvents() {
    $('#SubmitButton').click(function () {
        var firstNameVal = $('#FirstNameTextBox').val();
        var lastNameVal = $('#LastNameTextBox').val();
        $('#DivOutput').text(firstNameVal + ' ' + lastNameVal);

        //Using unbind();
        $('#MyDiv').unbind('mouseup');
    });

    //Handle select
    $('.MyInput').change(function () {
        alert($(this).val());
        $(this).addClass('Highlight');
    });

    $('#MyDiv').on('mouseenter mouseleave mouseup', function (e) {
        $(this).toggleClass('Highlight');
        $(this).css('cursor', 'pointer');
        if (e.type == 'mouseup') {
            $(this).text('X: ' + e.pageX + ' Y: ' + e.pageY);
        }
    });

    $('#MyTable tr').hover(function () {
        $(this).toggleClass('LightHighlight');
    });

    var phonesDiv = $('#PhonesDiv');

    $('#AddPhone').click(function () {
        var phoneSelDiv = $('div:eq(0)', phonesDiv).clone();
        var phoneTbDiv = $('div:eq(1)', phonesDiv).clone();
        $('select', phoneSelDiv).val('');
        $('input', phoneTbDiv).val('');
        phonesDiv.append('<div style="clear:both;" />')
                 .append(phoneSelDiv)
                 .append(phoneTbDiv);
    });

    phonesDiv.on('keypress', 'input', function (e) {
        if ((e.keyCode < 48 || e.keyCode > 57) && e.keyCode != 45) {
            e.stopPropagation();
            return false;
        }
    });
}