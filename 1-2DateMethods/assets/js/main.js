
let wochenTag = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

// echtzeituhr
const outputDay = document.getElementById('outputDay');
const outputHours = document.getElementById('outputHours');
const outputMinutes = document.getElementById('outputMinutes');
const outputSeconds = document.getElementById('outputSeconds');
const outputPmAm = document.getElementById('outputPmAm');

function myTimer() {
    let realTime = new Date();

    const wochentag = wochenTag[realTime.getDay()].slice(0, 3);
    const hours = realTime.getHours();
    const minutes = realTime.getMinutes();
    const seconds = realTime.getSeconds();
    realTime = realTime.toLocaleTimeString('en-EN').slice(0, 8);

    outputDay.textContent = `${wochentag}`;
    outputHours.textContent = `${hours}`;
    outputMinutes.textContent = `${minutes}`;
    outputSeconds.textContent = `${seconds}`;

    outputPmAm.textContent = `${hours >= 12 ? 'PM':'AM'}`;
};

setInterval(myTimer, 1000);
