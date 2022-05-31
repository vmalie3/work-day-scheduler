// added date to scheduler
var currentDay = moment();
$("#currentDay").text(currentDay.format("MMM Do, YYYY"));

//save text to local storage
var saveBtns = document.querySelector('.saveBtn');

saveBtns.addEventListener('click', function() {
    var event = document.querySelector('.textInput').value;
    localStorage.setItem('event', event);
});


//variable for current hour of the day
var currentHour = moment().hour();

//function to change color based on hour
var colorChange = function() {

    $('.block').each( function() {
        var blockHour = parseInt($(this).attr('id'));

        if (blockHour === currentHour) {
            $(this).addClass('present');
        }
        if (blockHour > currentHour) {
            $(this).addClass('future');
        }
        if (blockHour < currentHour) {
            $(this).addClass('past');
        }
    })
}

colorChange();
