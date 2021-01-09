$(document).ready(function() {
    const dateTime = moment().format('MMMM Do YYYY, h:mm:ss a');
    const dateTimeArr1 = dateTime.split(",");
    const dateTimeArr2 = dateTime.split(" ");
    const currentDate = dateTimeArr1[0];

    const time = dateTimeArr1[1];
    const amPM = dateTimeArr2[4];
    const currentTimeArr = time.split(":");
    const currentHour = currentTimeArr[0];
    console.log(currentHour + amPM);

    $("#currentDay").html(currentDate);

    const hours = ["9am", "10am", "11am", "12pm","1pm","2pm","3pm","4pm","5pm"];
    jQuery.each(hours, function(index, val) {
        const table = $(".container");
        table.append(`<div class="row">
                        <div id="` + val + `" class="hour">` + val + `</div>
                        <textarea></textarea>
                        <button type="button" class="btn btn-secondary">Save <i class="fas fa-share-square"></i></button>
                    </div>`);

        if ((currentHour + amPM) === $('#' + val)) {
            console.log('the current hour');
            $('#' + val).parent().addClass('present');
        } else {
            console.log('not the current hour');
            $('#' + val).parent().addClass('past');
        }
    });

});
