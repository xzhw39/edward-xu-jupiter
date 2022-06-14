// Today's date
var today = moment().format("dddd, MMMM Do, YYYY");
var divEl = $('<div>');
var inputEl = $('<input>');
// Apeending today's date on DOM
$("#currentDay").text(today);
divEl.append(inputEl);

$(document).ready(function(){
    $('.saveBtn').on('click', function(){
        var value = $(this).siblings('.description').val();
        var time = $(this).parent().attr('id');
        console.log(value);
        console.log(time);
    
        localStorage.setItem(time, value);



    })

})


function hour() {
    var currentHour = moment().hours();
    console.log(currentHour);

    $(".timeRow").each(function() {
        var block = parseInt($(this).attr('id').split('-')[1]);
        console.log(typeof (block));

        // Boolean logic for current hour
        if ( block < (currentHour)) {
            $(this).addClass('past')

        } else if (block === (currentHour)) {
            $(this).removeClass('past')
            $(this).addClass('present')
        } else {
            $(this).removeClass('past')
            $(this).removeClass('present')
            $(this).addClass('future')
        }
    })

}

hour();

$('#hour-9 .description').val(localStorage.getItem('hour-9'));
$('#hour-10 .description').val(localStorage.getItem('hour-10'));
$('#hour-11 .description').val(localStorage.getItem('hour-11'));
$('#hour-12 .description').val(localStorage.getItem('hour-12'));
$('#hour-13 .description').val(localStorage.getItem('hour-13'));
$('#hour-14 .description').val(localStorage.getItem('hour-14'));
$('#hour-15 .description').val(localStorage.getItem('hour-15'));
$('#hour-16 .description').val(localStorage.getItem('hour-16'));
$('#hour-17 .description').val(localStorage.getItem('hour-17'));
