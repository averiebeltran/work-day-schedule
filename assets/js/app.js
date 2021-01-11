$(document).ready(function() {
    const dateTime = moment().format('MMMM Do YYYY, h:mm:ss a');
    const dateTimeArr1 = dateTime.split(",");
    const currentDate = dateTimeArr1[0];
    const currentHour = moment().hour();
    const table = $(".container");
    const displayHours = ["1pm","2pm","3pm","4pm","5pm","6pm","7pm","8pm","9pm","10pm"];

    $("#currentDay").html(currentDate);

    jQuery.each(displayHours, function(index, val) {
        const hour = currentHourCheck(val);
        table.append(`<div class="row">
                        <div id=` + hour + ` class="hour">` + val + `</div>
                        <textarea id="textarea-` + hour + `"></textarea>
                        <button id="save-` + hour + `" type="button" class="btn btn-secondary">Save <i class="fas fa-share-square"></i></button>
                    </div>`);

        if (currentHour === hour) {
            $("#" + hour).parent().addClass('present');
        } else if (currentHour > hour) {
            $('#' + hour).parent().addClass('past');
        } else if (currentHour < hour) {
            $('#' + hour).parent().addClass('future');
        }

        $("#save-" + hour).click(function() {
            console.log("clicked", hour);
            console.log($("#textarea-" + hour).val());
            const event = $("#textarea-" + hour).val();
            localStorage.setItem('event-' + hour, hour + "-" + event);
        });

    });

    getCalendarEvents();

    function currentHourCheck(currentHour) {
        switch(currentHour) {
            case "1pm": return 13;
            case "2pm": return 14;
            case "3pm": return 15;
            case "4pm": return 16;
            case "5pm": return 17;
            case "6pm": return 18;
            case "7pm": return 19;
            case "8pm": return 20;
            case "9pm": return 21;
            case "10pm": return 22;
        }
    }

    function getCalendarEvents() {
        const values = [];
        const keys = Object.keys(localStorage);
        console.log(keys);
        let i = keys.length;

        while (i--) {
            values.push(localStorage.getItem(keys[i]));
        }

        updateCalendar(values);
    }

    function updateCalendar(values) {
        console.log(values);
        jQuery.each(values, function(index, val) {
            const event = val.split("-");
            const id = event[0];
            const eventText = event[1];

            $("#textarea-" + id).text(eventText);

            if (event[1] === "") {
                localStorage.removeItem("event-" + id);
            }
        });
    }
});
