function getComputerChoice() {
    // get a random number between 0-2 and store it
    let i = Math.floor(Math.random() * 3);
    // if number is 0 return "Rock!"
    if (i === 0) {
        return "rock";
    // if number is 1 return "Paper!"
    } else if (i === 1) {
        return "paper";
    // if number is 2 return "Scissors!"
    } else {
        return "scissors";
    };
};

function getHumanChoice() {
    // prompt user to input rock paper or scissors and store it
    let input = prompt("Enter Rock, Paper, or Scissors:").toLowerCase();

    switch (input) {
    // if input is rock return "Rock!"
        case "rock":
            return "rock"
            break;
    // if input is paper return "Paper!"
        case "paper":
            return "paper"
            break;
    // if input is scissors return "Scissors!"
        case "scissors":
            return "scissors"
            break;
        default:
            console.log("Invalid input, please try again.");
            return getHumanChoice();
    };
};

console.log(getComputerChoice());
console.log(getHumanChoice());
