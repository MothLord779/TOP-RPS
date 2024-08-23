let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
    
    // get a random number between 0-2 and store it
    let i = Math.floor(Math.random() * 3);
    // if number is 0 return "rock"
    if (i === 0) {
        return "rock";
    // if number is 1 return "paper"
    } else if (i === 1) {
        return "paper";
    // if number is 2 return "scissors"
    } else {
        return "scissors";
    };
};

function getHumanChoice() {
    
    // prompt user to input rock paper or scissors and store it
    let input = prompt("Enter Rock, Paper, or Scissors:").toLowerCase();

    switch (input) {
    // if input is rock return "rock"
        case "rock":
            return "rock"
            break;
    // if input is paper return "paper"
        case "paper":
            return "paper"
            break;
    // if input is scissors return "scissors"
        case "scissors":
            return "scissors"
            break;
        default:
            console.log("Invalid input, please try again.");
            return getHumanChoice();
    };
};

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

function playRound(humanChoice, computerChoice) {

    // if humanChoice and computerChoice are the same its draw
    if (humanChoice === computerChoice) {
        return "It's a Draw!"
    // if humanChoice is "rock" and computerChoice is "paper" computer wins
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore++
        return "Computer Wins!"
    // if humanChoice is "paper" and computerChoice is "scissors" computer wins
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
    computerScore++
        return "Computer Wins!"
    // if humanChoice is "scissors" and computerChoice is "rock" computer wins
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
    computerScore++
        return "Computer Wins!"
    // if humanChoice is "rock" and computerChoice is "scissors" human wins
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
    humanScore++
        return "Human Wins!"
    // if humanChoice is "paper" and computerChoice is "rock" human wins
    } else if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore++
        return "Human Wins!"
    // if humanChoice is "scissors" and computerChoice is "paper" human wins
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
    humanScore++
        return "Human Wins!"
    } else {
        return "An Error Occured!"
    };

};

console.log(playRound(humanChoice, computerChoice));
console.log(`Human: ${humanScore}`);
console.log(`Computer: ${computerScore}`);


