// Today's date

var today = moment().format("dddd, MMMM Do, YYYY");
$("#currentDay").text(today);

// Declare new variables

var divEl = $('<div>');

var inputEl = $('<input>');

inputEl.attr('type', 'text');


// Append new elements

divEl.append(inputEl);

// Element attributes

// inputEl.attr("type")

$('.timeRow').css({'background-color': 'white'});

$(':text').css('background-color', 'blue');

//click event and local storage
$("button").on("click", function (event) {
    event.preventDefault();

    var textInput = $(this).siblings("input").attr("data");
    var textVal = $(this).siblings("input").val();
    localStorage.setItem(textInput, textVal);
    var lsVal = localStorage.getItem(textInput);
    $(this).siblings("input").text(lsVal);
});