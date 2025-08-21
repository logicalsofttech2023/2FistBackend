var setEndDate1 = "May 8, 2023 6:0:0";
var setEndDate2 = "May 1, 2023 0:0:1";
var setEndDate3 = "May 3, 2023 0:0:1";
var setEndDate4 = "May 4, 2023 0:0:1";
var setEndDate5 = "May 5, 2023 0:0:1";
var setEndDate6 = "May 6, 2023 0:0:1";

function startCountDownDate(dateVal) {
    var countDownDate = new Date(dateVal).getTime();
    return countDownDate;
}

function countDownTimer(start, targetDOM) {
    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = start - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // add 0 at the beginning if days, hours, minutes, seconds values are less than 10
    days = (days < 10) ? "0" + days : days;
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    // Output the result in an element with countdown-timer-x"
    document.querySelector("#" + targetDOM).textContent = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    // If the count down is over, write some text 
    if (distance < 0) {
        // clearInterval();
        document.querySelector("#" + targetDOM).textContent = "EXPIRED";
    }
}

var cdd1 = startCountDownDate(setEndDate1);
var cdd2 = startCountDownDate(setEndDate2);
var cdd3 = startCountDownDate(setEndDate3);
var cdd4 = startCountDownDate(setEndDate4);
var cdd5 = startCountDownDate(setEndDate5);
var cdd6 = startCountDownDate(setEndDate6);

setInterval(function () { countDownTimer(cdd1, "countdown-timer-1"); }, 1000);
setInterval(function () { countDownTimer(cdd2, "countdown-timer-2"); }, 1000);
setInterval(function () { countDownTimer(cdd3, "countdown-timer-3"); }, 1000);
setInterval(function () { countDownTimer(cdd4, "countdown-timer-4"); }, 1000);
setInterval(function () { countDownTimer(cdd5, "countdown-timer-5"); }, 1000);
setInterval(function () { countDownTimer(cdd6, "countdown-timer-6"); }, 1000);
