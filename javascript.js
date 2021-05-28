console.log("Hello");
let computerPlay = () => {
    let random = Math.floor((Math.random() * 3));
    let moves = ["Rock", "Paper", "Scissors"];
    return moves[random];
}
/*let personPlay = () => {
    let random = Math.floor((Math.random() * 3));
    let moves = ["ROck", "PaPer", "ScisSors"];
    return moves[random];
}*/

let singleRound = function(Person, Computer){
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

let game = function(n){
    let personScore = 0;
    let computerScore = 0;
    while(personScore < n && computerScore < n){
        let personSelection = prompt("Rock, Paper or Scissors", "rock");
        let computerSelection = computerPlay();
        let round = singleRound(personSelection, computerSelection);
        if (round.includes("win")){
            personScore++;
        } else if (round.includes("lose")){
            computerScore++;
        }
        console.log(`You: ${personSelection}, Computer: ${computerSelection}`);
        console.log(round);
        console.log(`Human: ${personScore}, Computer: ${computerScore}`);
    }
    if(personScore >  computerScore){
        alert("You Won");
    } else {
        alert("you lose");
    }
}

game(parseInt(prompt("to how many?", "5")));
// for (let i = 0; i < 20; i++){
//     let computer = computerPlay();
//     let person = prompt("Rock, paper or scissors?");
//     console.log(`Trial No.${i+1}: Person: ${person}, Computer: ${computer}`);
//     console.log(singleRound(person, computer));
// }