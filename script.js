const CHOICES = ['rock', 'paper', 'scissors'];

function convertChoice(choice) {
    let value;
    if (choice === 'rock') {
        value = 0;
    } else if (choice === 'paper') {
        value = 1;
    } else { //scissors
        value = 2;
    }
    return value;
}

function playerPlay() {

    let playerChoice = prompt('Rock, paper, scissors?');
    
    function validateChoice() {
        while (playerChoice === null
            || !CHOICES.includes(playerChoice.toLowerCase())) {
            playerChoice = prompt('Please input a valid value.');
        }
    }
    
    validateChoice();
    return convertChoice(playerChoice);
}


function computerPlay() {

    let choiceIndex = Math.floor(Math.random() * 3);
    let computerChoice = CHOICES[choiceIndex]
    return convertChoice(computerChoice);
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        alert(
            `Computer also picked ${CHOICES[computerSelection]}. It's a tie.`
            )
    } else {
        if (playerSelection === 0) {
            if (computerSelection === 2) {
                alert(
                    `Computer chose ${CHOICES[computerSelection]}. You win!`
                    )
            } else {
                alert(
                    `Computer chose ${CHOICES[computerSelection]}. You lose...`
                    )
            }
            
        } else if (playerSelection === 1) {
            if (computerSelection === 0) {
                alert(
                    `Computer chose ${CHOICES[computerSelection]}. You win!`
                    )
            } else {
                alert(
                    `Computer chose ${CHOICES[computerSelection]}. You lose...`
                    )
            }
        } else {
            if (playerSelection === 2) {
                if (computerSelection === 1) {
                    alert(
                        `Computer chose ${CHOICES[computerSelection]}. You win!`
                        )
                } else {
                    alert(
                        `Computer chose ${CHOICES[computerSelection]}. You lose...`
                        )
                }
            }
        }
    }

}

function game() {
    for (let i = 0; i < 5; i++) {
        playRound(playerPlay(), computerPlay());
    }
}

game();

