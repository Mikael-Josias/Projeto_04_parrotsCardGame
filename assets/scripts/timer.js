
const timer = document.querySelector(".timer");

let minutes = 0, seconds = 0;
let interval;

const timeGenerator = () => {
    seconds += 1;

    if (seconds >= 60) {
        minutes += 1;
        seconds = 0;
    }

    let secondsValues = seconds < 10? `0${seconds}`: seconds;
    let minutesValues = minutes < 10? `0${minutes}`: minutes;

    timer.innerHTML = `Tempo: ${minutesValues}:${secondsValues}`;
}