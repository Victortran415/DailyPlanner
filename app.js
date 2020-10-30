$(document).ready(function() {
    const currentTime = moment().format('MMMM Do YYYY, H:mm:ss a');
    $("#currentDay").text(currentTime)

    console.log(currentTime)

    




    const times = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

    times.forEach(time => {
        const timeCheck = window.localStorage.getItem(time);


        const currentHour = moment().hour()

        console.log(currentHour)
        console.log(time)

        if (currentHour > time) {
            $(`#${time}`).addClass("bg-danger text-whitesmoke")
            $(`#${time}`).attr("disabled", true)
        } else if (currentTime === time) {
            $(`#${time}`).addClass("bg-secondary text-whitesmoke")
        } else {
            $(`#${time}`).addClass("bg-success text-whitesmoke")
        }

        if (timeCheck === null) {
            window.localStorage.setItem(time, "")
        } else if (timeCheck.length > 0 ) {
            $(`#${time}`).attr("value", window.localStorage.getItem(time))
        }
    })

    $("form").on("submit", function (e) {
        e.preventDefault();
        const time = (e.target.querySelector("textarea").getAttribute("id"))
        console.log(time) NOTE: //seeing if the time will appear to adding text
        const text =(e.target.querySelector("textarea").value)
        console.log(text) NOTE: //seeing if the text will appear to adding text
        window.localStorage.setItem(time, text)
    })
    
})
