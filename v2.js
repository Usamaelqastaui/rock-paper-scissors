let playerScore = document.querySelector("#playerScore");
let computerScore = document.querySelector("#computerScore");
let result = document.querySelector("#result");

let computerPlay = () => {
    let random = Math.floor((Math.random() * 3));
    let moves = ["Rock", "Paper", "Scissors"];
    return moves[random];
}


let playRound = function(Person, Computer){
    let person = Person.toLowerCase();
    let computer = Computer.toLowerCase();
    if(person == "rock"){
        if(computer == "rock"){
            return "Draw, Play Again"
        } else if (computer == "paper"){
            return "You lose, paper beats rock"
        } else {
            return "You win, Rock beats Scissors"
        }
    } else if (person == "paper"){
        if(computer == "paper"){
            return "Draw, Play Again"
        } else if (computer == "scissors"){
            return "You lose, scissors beats paper"
        } else {
            return "You win, Paper beats Rock"
        }
    } else {
        if(computer == "scissors"){
            return "Draw, Play Again"
        } else if (computer == "rock"){
            return "You lose, Rock beats Scissors"
        } else {
            return "You win, Scissors beats Papers"
        }
    }
}

let game = function(player){
    let personSelection = player;
    let computerSelection = computerPlay();
    let round = playRound(personSelection, computerSelection);
    if (round.includes("win")){
        playerScore.textContent++;
    } else if (round.includes("lose")){
        computerScore.textContent++;
    }
    console.log(`You: ${personSelection}, Computer: ${computerSelection}`);
    result.textContent = round;
    console.log(`Human: ${playerScore.textContent}, Computer: ${computerScore.textContent}`);
}

function winner () {
    if (playerScore.textContent == 5) {
        alert("Human Won!");
        playerScore.textContent = 0;
        computerScore.textContent = 0;
    } else if (computerScore.textContent == 5) {
        alert("Machine Won!");
        playerScore.textContent = 0;
        computerScore.textContent = 0;
    }
}
const btns = document.querySelectorAll("button");

btns.forEach((btn) => {
    btn.addEventListener('click',(e) => {
        game(e.target.id);
        winner();
    })
})