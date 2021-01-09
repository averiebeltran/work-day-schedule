$(document).ready(function() {
    const dateTime = moment().format('MMMM Do YYYY, h:mm:ss a');
    const dateTimeArr = dateTime.split(",");
    const currentDate = dateTimeArr[0];

    $("#currentDay").html(currentDate);

    const hours = ["9 a.m.", "10 a.m.", "11 a.m.", "12 p.m.","1 p.m.","2 p.m.","3 p.m.","4 p.m.","5 p.m."];
    jQuery.each(hours, function(index, val) {
        console.log(index, val);
        const table = $(".container");
        table.append(`<div class="row">
                        <div id="hour-` + index + `" class="time">` + val + `</div>
                        <textarea></textarea>
                        <button type="button" class="btn saveBtn">Save <i class="fas fa-share-square"></i></button>
                    </div>`);
    });

});
