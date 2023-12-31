const list = ['rock', 'paper', 'scissors']

function getComputerChoice(Choice){
    const random = list [Math.floor(Math.random() * list.length)];
    return random;

}

function checkWinner(playerSelection, computerSelection){
    if (playerSelection == computerSelection){
        return "Tie";
    }
    else if(
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock")
    ){
        return "Player";
    }
    else {
        return "Computer";
    }

}

function playRound(playerSelection, computerSelection){
    const result = checkWinner(playerSelection, computerSelection);
    if (result == "Tie"){
        return "It's a Tie";
    }
    else if(result == "Player"){
        return 'You Win! '
    }
    else{
        return 'You Lose! Computer beats Player';

    }
}

function getPlayerChoice(){
    let validInput = false;
    while(validInput == false){
        const choice = prompt("Rock, Paper, Or Scissors")
        if (choice == null){
            continue;
        }
        const choiceInLower = choice.toLowerCase();
        if(list.includes(choiceInLower)){
            validInput = true;
            return choiceInLower;
        }
    }
}

function game(){
    let scorePlayer = 0;
    let scoreComputer = 0;
    console.log('Welcome')
    for(let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection))
        console.log('--------')
        if(checkWinner(playerSelection, computerSelection) == 'Player'){
           scorePlayer++; 
        }
        else if (checkWinner(playerSelection, computerSelection) == 'Computer'){
            scoreComputer++;
        }

    }
    console.log("Game Over")
    if(scorePlayer > scoreComputer){
        console.log('Player Was the Winner');
    }
    else if(scorePlayer < scoreComputer){
        console.log('Computer Was the Winner');
    }
    else{
        console.log("It's a Tie");
    }

}

game()