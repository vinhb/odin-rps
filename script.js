const CHOICES = ['rock', 'paper', 'scissors'];
const BUTTONS = document.querySelectorAll('button');
const scoreBoard = document.querySelector('div');

let playerScore = 0;
let computerScore = 0;

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

function computerPlay() {

    let choiceIndex = Math.floor(Math.random() * 3);
    let computerChoice = CHOICES[choiceIndex]
    return convertChoice(computerChoice);
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 0
            
    } else {
        if (playerSelection === 0) {
            if (computerSelection === 2) {
                return 1
                    
            } else {
                return -1                    
            }
            
        } else if (playerSelection === 1) {
            if (computerSelection === 0) {
                return 1
            } else {
                return -1

            }
        } else {
            if (playerSelection === 2) {
                if (computerSelection === 1) {
                return 1
                        
                } else {
                    return -1
                }
            }
        }
    }

}

function checkWinner() {
    if (playerScore === 5 || computerScore === 5) {
        playerScore === 5 ? alert('You win!') : alert('You lose. :(')
    }
}

BUTTONS.forEach( (button) => {
    button.addEventListener('click', () => {
        let playerMove = convertChoice(button.textContent.toLowerCase());
        let computerMove = computerPlay();
        const RESULT = playRound(playerMove, computerMove);
        scoreBoard.innerText = '';

        if (RESULT === 0) {
            // change div text to be You picked ___. Computer also selected ___. It's a tie.
            scoreBoard.innerText = `You picked ${CHOICES[playerMove]}. 
            Computer also selected ${CHOICES[computerMove]}. It's a tie. 
            
            The score is: 
            player: ${playerScore}
            computer: ${computerScore}` //undoes move conversion to print result string
        } else if (RESULT === 1) {
            playerScore += 1;
            scoreBoard.innerText = `You picked ${CHOICES[playerMove]}. 
            Computer also selected ${CHOICES[computerMove]}. You win!
            
            The score is: 
            player: ${playerScore}
            computer: ${computerScore}
            `
            
        } else {
            computerScore += 1;
            scoreBoard.innerText = `You picked ${CHOICES[playerMove]}. 
            Computer also selected ${CHOICES[computerMove]}. You lose...
            
            The score is: 
            player: ${playerScore}
            computer: ${computerScore}
            `
            
        }

        checkWinner();
        
    });
});

