$(document).ready(function() {
    const currentTime = moment().format('MMMM Do YYYY, h:mm a');
    $("#currentDay").text(currentTime)
    const hours = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

    hours.forEach(time => {
        const timeCheck = window.localStorage.getItem(time);
        const currentHour = moment().hour()
        const timeVal = "#" + time

        if (currentHour > time) {
            $(timeVal).addClass("bg-secondary text-dark")
            $(timeVal).attr("disabled", true)
        } else if (currentHour === time) {
            $(timeVal).addClass("bg-primary text-white")
        } else {
            $(timeVal).addClass("bg-success text-white")
        }

        if (timeCheck === null) {
            window.localStorage.setItem(time, "")
        } else if (timeCheck.length > 0 ) {
            $(timeVal).attr("value", window.localStorage.getItem(time)) 
        }
    })

    $("form").on("submit", function (e) {
        e.preventDefault();
        const time = (e.target.querySelector("input").getAttribute("id"))
        console.log(time) //NOTE: //seeing if the time will appear to adding text
        const textInput =(e.target.querySelector("input").value)
        console.log(textInput) //NOTE: //seeing if the text will appear to adding text
        window.localStorage.setItem(time, textInput)
        location.reload(); // when saving text, the page will automatically reload
    })
    
})
