
let playerScore = 0; // variables needed
let computerScore = 0;
let player;
let score;
let play;

const rockChoice = document.getElementById('rockChoice'); // grabbing element ID's from my  3 buttons
const paperChoice = document.getElementById('paperChoice');
const scissorsChoice = document.getElementById('scissorsChoice');




function gamePlay(player,playerScore, computerScore){ // main gameplay function
    let computer;
    let result;
    let score;

    computer = computerPlay();
    playerChoice(player);
    result = judgement(player, computer);
    console.log(result);
    displayResults(player, computer, result);
    score = scoreUp(result, playerScore, computerScore);
    


    return score;
};

function playerChoice(player){ //function to change player choice image

    if(player == "rock"){
        document.getElementById("p1").src="./images/rock.png";
    }
    else if(player == "paper"){
        document.getElementById("p1").src="./images/paper.png";
    }
    else if(player == "scissors"){
        document.getElementById("p1").src="./images/scissors.png";
    }
}

function displayResults(player, computer, result){
    let player1 = player.charAt(0).toUpperCase() + player.slice(1);
    let computer1 = computer.charAt(0).toUpperCase() + computer.slice(1);
    


    if(result == "player"){
        const results = document.getElementById("results");
        const explanation = document.getElementById("explanation");
        results.textContent = "You Won!";
        explanation.textContent = player1 + " beats " + computer1 + "!";

    }
    else if(result == "computer"){
        const results = document.getElementById("results");
        const explanation = document.getElementById("explanation");
        results.textContent = "You Lost..";
        explanation.textContent = player1 + " loses to " + computer1 + "..";

    }
    else if(result == "tie"){
        const results = document.getElementById("results");
        const explanation = document.getElementById("explanation");
        results.textContent = "It's a Tie";
        explanation.textContent = player1 + " ties with " + computer1;
    }

}


function computerPlay(){ // function that will return computer's choice
    let computerChoice;
    let computerAction;
    computerChoice = Math.floor(Math.random() * 3);

    if(computerChoice == 0){
        computerAction = "rock";
        document.getElementById("p2").src="./images/rock.png";
    }
    else if(computerChoice == 1){
        computerAction = "paper";
        document.getElementById("p2").src="./images/paper.png";
    }
    else if(computerChoice == 2){
        computerAction ="scissors"
        document.getElementById("p2").src="./images/scissors.png";
    }

    return computerAction;
};


function judgement(player, computer){ // function comparing both inputs against each other and deciding a winner

    if(player == 'rock' && computer == 'scissors'){
        return 'player';
    }
    else if (player == 'rock' && computer == 'paper'){
        return 'computer';
    }
    else if (player == 'paper' && computer == 'scissors'){
        return 'computer';
    }
    else if (player == 'paper' && computer == 'rock'){
        return 'player';
    }
    else if (player == 'scissors' && computer == 'paper'){
        return 'player';
    }
    else if (player == 'scissors' && computer == 'rock'){
        return 'computer';
    }
    else if (player == computer){
        return 'tie';
    }


}; 

function scoreUp(result, playerScore, computerScore){ // function that calculates and displays score
    
    if (result == 'player'){
        playerScore += 1;
    }
    else if (result == 'computer'){
        computerScore +=1;
    }

    const pScore = document.getElementById("pScore");
    pScore.textContent = "Player: "  + playerScore;

    const cScore = document.getElementById("cScore");
    cScore.textContent = "Computer: "  + computerScore;

    return [playerScore, computerScore];

}

function resultAlert(player, playerScore, computer, computerScore){ // function that shows choices, result of round and scores
    if (result == 'player') {
        player = player.charAt(0).toUpperCase() + player.slice(1);
        computer = computer.charAt(0).toUpperCase() + computer.slice(1);
        alert('You chose: ' + player + '\nThe computer chose: ' + computer + '\nYou win!!' + '\nPlayer: '
            + playerScore + ' Computer: ' + computerScore)
    }
    else if (result == 'comp') {
        player = player.charAt(0).toUpperCase() + player.slice(1);
        computer = computer.charAt(0).toUpperCase() + computer.slice(1);
        alert('You chose: ' + player + '\nThe computer chose: ' + computer + '\nYou lose' + '\nPlayer: '
            + playerScore + ' Computer: ' + computerScore)
    }
    else if (result == 'tie') {
        player = player.charAt(0).toUpperCase() + player.slice(1);
        computer = computer.charAt(0).toUpperCase() + computer.slice(1);
        alert('You chose: ' + player + '\nThe computer chose: ' + computer + "\nIt's a tie" + '\nPlayer: '
            + playerScore + ' Computer: ' + computerScore)
    }


}

function winner(playerScore, computerScore){ 
    




}





rockChoice.addEventListener("click", ()=> {
   score = gamePlay("rock", playerScore, computerScore);
   playerScore = score[0];
   computerScore = score[1];
   winner(playerScore, computerScore);

    
})

paperChoice.addEventListener("click", ()=> {
    score = gamePlay("paper", playerScore, computerScore);
    playerScore = score[0];
    computerScore = score[1];
    winner(playerScore, computerScore);
   

})

scissorsChoice.addEventListener("click", ()=> {
    score = gamePlay("scissors", playerScore, computerScore);
    playerScore = score[0];
    computerScore = score[1];
    winner(playerScore, computerScore);
    

})












