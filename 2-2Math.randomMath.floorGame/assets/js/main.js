console.log('test');

function Game() {

    const randomNum = Math.floor(Math.random() *10 + 1);
    console.log(randomNum);

    const userInput = Number(prompt('Zahlzwischen1 und 10 eingeben'));
    console.log(userInput);

    if (randomNum === userInput) {
        console.log('Das ist die richtige Zahl');
    } else {
        console.log('Leider falsch. Die richtige Zahl ist ' + randomNum);
    }
}


Game();