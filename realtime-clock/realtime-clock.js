function realtimeClock() {
    let rtClock = new Date();
    let hours = rtClock.getHours();
    let minustes = rtClock.getMinutes();
    let seconds = rtClock.getSeconds();

    // add AM and PM system
    let amPm = (hours < 12) ? "AM" : "PM";

    // Convert the hours componet to 12-hour format
    hours = (hours <= 12) ? hours : (hours-12);

    // Pad the hours, minustes and seconds with leading zeros.
    hours = ("0" + hours).slice(-2);
    minustes = ("0" + minustes).slice(-2);
    seconds = ("0" + seconds).slice(-2);

    // Display the clock
    document.getElementById('clock').innerText =
        hours + "  :  " + minustes + "  :  " + seconds + " " + amPm;
    let t = setTimeout(realtimeClock, 500);
}