console.log('test');

const outputTime = document.getElementById('outputTime');


function writeTimeInHtml() {
    const date1 = new Date();

    const day = date1.getDate();

    const month = date1.getMonth();

    const year = date1.getFullYear();

    outputTime.innerHTML = day + ' - ' + month + ' - ' + year;

}

writeTimeInHtml();