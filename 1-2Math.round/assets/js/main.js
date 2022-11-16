console.log('test');

let array = [
    3.14,
    193.4464,
    0.8596433607,
    -2.940629089,
];


function roundedNumber() {

    array.forEach(element => {
        let round = Math.round(element);
        console.log(round);
    });
    
}
roundedNumber();