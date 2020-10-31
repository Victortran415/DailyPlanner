$(document).ready(function() {
    const currentTime = moment().format('MMMM Do YYYY, H:mm a');
    $("#currentDay").text(currentTime)
    const times = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

    times.forEach(time => {
        const timeCheck = window.localStorage.getItem(time);
        const currentHour = moment().hour()
        const timeVal = "#" + time

        if (currentHour > time) {
            $(timeVal).addClass("bg-danger")
            $(timeVal).attr("disabled", true)
        } else if (currentHour === time) {
            $(timeVal).addClass("bg-secondary text-white")
        } else {
            $(timeVal).addClass("bg-success text-white")
        }

        if (timeCheck === null) {
            window.localStorage.setItem(time, "")
        } else if (timeCheck.length > 0 ) {
            $(timeVal).attr("placeholder", window.localStorage.getItem(time)) // FIXME: text saves to the box, but difficult to see with font color
        }
    })

    $("form").on("submit", function (e) {
        e.preventDefault();
        const time = (e.target.querySelector("textarea").getAttribute("id"))
        console.log(time) //NOTE: //seeing if the time will appear to adding text
        const text =(e.target.querySelector("textarea").value)
        console.log(text) //NOTE: //seeing if the text will appear to adding text
        window.localStorage.setItem(time, text)
        location.reload(); // when saving text, the page will automatically reload
    })
    
})
