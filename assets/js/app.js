$(document).ready(function() {
    var dateTime = moment().format('MMMM Do YYYY, h:mm:ss a');
    var dateTimeArr = dateTime.split(",");
    var currentDate = dateTimeArr[0];

    $("#currentDay").html(currentDate);
});