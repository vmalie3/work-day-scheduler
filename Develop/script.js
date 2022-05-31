// added date to scheduler
var currentDay = moment();
$("#currentDay").text(currentDay.format("MMM Do, YYYY"));

//save text to local storage
document.querySelector('#saveBtn').addEventListener('click', function() {
    var event = document.querySelector('#textInput').value;
    localStorage.setItem('event', event);
});