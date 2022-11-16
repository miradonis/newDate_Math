let list = [
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


function monatsname(string) {

    let datei1 = new Date(string);
    let datei2 = list[datei1.getMonth()];
    console.log(datei2);

};

monatsname("2001,3,4");