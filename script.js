const daysp = document.getElementById("days");
const hoursp = document.getElementById("hours");
const minsp = document.getElementById("minutes");
const secsp = document.getElementById("seconds");

const shopOpening = new Date("01 jan 2025 00:00:00");

function timer(countDownTime){
    let now = new Date();
    let timeRemaining = countDownTime - now;    
    
    let seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    let minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    let hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let days = Math.floor(timeRemaining / (1000*60*60*24));

    daysp.innerText = days;
    hoursp.innerText = hours;
    minsp.innerText = minutes;
    secsp.innerText = seconds;

}
setInterval(() => timer(shopOpening), 1000);
timer(shopOpening);