
let playerScore = 0; // variables needed
let computerScore = 0;
let result;
let computer;
let player;
let score;


function gamePlay(){ // function that's grabbing, validating then returning user input 
    var userInput = window.prompt("Rock Paper or Scissors?");
    userInput = userInput.toLowerCase();
    
    while((userInput != "rock") && (userInput != "paper") && (userInput != "scissors")){
        alert('invalid input')
        userInput = window.prompt("Rock Paper or Scissors?");
        userInput = userInput.toLowerCase();
    };

    return userInput;

};

function computerPlay(){ // function that will return computer's choice
    let computerChoice;
    let computerAction;
    computerChoice = Math.floor(Math.random() * 3);

    if(computerChoice == 0){
        computerAction = "rock";
    }
    else if(computerChoice == 1){
        computerAction = "paper";
    }
    else if(computerChoice == 2){
        computerAction ="scissors"
    }

    return computerAction;
};


function judgement(player, comp){ // function comparing both inputs against each other and deciding a winner

    if(player == 'rock' && comp == 'scissors'){
        return 'player';
    }
    else if (player == 'rock' && comp == 'paper'){
        return 'comp';
    }
    else if (player == 'paper' && comp == 'scissors'){
        return 'comp';
    }
    else if (player == 'paper' && comp == 'rock'){
        return 'player';
    }
    else if (player == 'scissors' && comp == 'paper'){
        return 'player';
    }
    else if (player == 'scissors' && comp == 'rock'){
        return 'comp';
    }
    else if (player == comp){
        return 'tie';
    }


}; 

function scoreUp(decision, playerscore, compscore){ // function that calculates score
    
    if (decision == 'player'){
        playerscore += 1;
    }
    else if (decision == 'comp'){
        compscore +=1;
    }

    return [playerscore, compscore];

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

function winner(playerScore, computerScore){ // Function that announces winner
    if(playerScore == 5){
        alert('Congrats!! You Won!!');
    }
    else{
        alert('Too bad... you lose');
    }
}



while ((playerScore < 5) && (computerScore < 5)) {
    player = gamePlay();
    computer = computerPlay();
    result = judgement(player, computer);
    score = scoreUp(result, playerScore, computerScore);
    playerScore = score[0];
    computerScore = score[1];
    resultAlert(player, playerScore, computer, computerScore);
}

winner(playerScore, computerScore);








