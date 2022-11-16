console.log('test');

function amOrPm(string) {
    let date1 = new Date(string);
    let date2 = date1.getHours();
    console.log(date1);
    console.log(date2);

    if (date2 < 12) {
        console.log('AM')
    } else {
        console.log('PM')
    }
}

amOrPm(2019, 12, 3, 12);