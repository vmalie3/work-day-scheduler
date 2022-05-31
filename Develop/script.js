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














// var timeColor = function () {
//     var hourBlock = document.querySelector('.hrNum');
//     if (hourBlock.value === currentHour) {
//         $(this).parentElement.classList.add('present');
//     }
// };

// timeColor();


// var timeColor = function() {
//     var date = new Date();
//     var hour = date.getHours();
//     console.log(hour);

//     var table = $('#table');
//     var dispHourAm = document.querySelector('#am').value

//     if (hour === dispHourAm) {
//         table.find('tr').children().addClass('present');
//     };
// }

// timeColor();