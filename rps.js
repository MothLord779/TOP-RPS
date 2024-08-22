function getComputerChoice() {
    // get a random number between 0-2 and store it
    let i = Math.floor(Math.random() * 3);
    // if number is 0, return "Rock!"
    if (i === 0) {
        return "Rock!";
    // if number is 1, return "Paper!"
    } else if (i === 1) {
        return "Paper!";
    // if number is 2, return "Scissors!"
    } else {
        return "Scissors!";
    };
};

console.log(getComputerChoice());