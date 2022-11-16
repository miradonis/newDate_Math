let monate = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember"
];

let wochenTag = [
    "Sonntag",
    "Montag",
    "Dienstag",
    "Mittwoch",
    "Donnerstag",
    "Freitag",
    "Samstag"
];

let date = new Date();
console.log(date);
console.log(date.getFullYear());
console.log(date.getMonth() + ' month');
console.log(date.getDay() + ' day');
console.log(date.getHours() + ' hozrs');
console.log(date.getMinutes() + ' minutes');
console.log(wochenTag[date.getDay()]);
console.log(monate[date.getMonth()]);


const writeInHtml = document.getElementById('outputTime');
let realTime = new Date();
console.log(realTime.toLocaleTimeString('en-EN'));
writeInHtml.innerHTML =wochenTag[realTime.getDay()] +  realTime.toLocaleTimeString('en-EN');

