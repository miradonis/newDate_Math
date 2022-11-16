console.log('test');

const dateOne = document.getElementById('dateOne');
const dateTwo = document.getElementById('dateTwo');
const dateThree = document.getElementById('dateThree');
const dateFour = document.getElementById('dateFour');


const date1 = 'new Date("September 2, 2019 09:00:00")';
dateOne.innerHTML = new Date() + ' = ' + date1;

const date2 = 'new Date(0)';
dateTwo.innerHTML = new Date() + ' = ' + date2;

const date3 = 'new Date(31556908800)';
dateThree.innerHTML = new Date(31556908800) + ' = ' + date3;

const date4 = 'new Date(86400000)';
dateFour.innerHTML = new Date(86400000) + ' = ' + date4;