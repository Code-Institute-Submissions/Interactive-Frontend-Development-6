const cards = document.querySelectorAll(".card");
//load Sound SFX for cardturning.
const turnSFX = document.getElementById("turnSFX");
//play sound when the game is finished
const winningSound = document.getElementById("winningSound");
//play applause sound when 2 cards match
const applause = document.getElementById("applause");

let hasTurnedCard = false;
let firstCard, secondCard;
let lockCards = false;

//Score counter
let gameScore = 0;
let scoreCard = document.getElementById("score");

function addScore(gameScore) {
    return gameScore += 10;
}

function minusScore(gameScore) {
    return gameScore -= 5;
}

function newGame() {
    //new game button that reset the gameboard
    location.reload();
}

function turnSound() {
    //play that funky music white boy...
    turnSFX.play();
}

function playWinningSound () {
    //winning sound when game is finished
    winningSound.play();
}

function endOfGame() {
    let totalCards = cards.length;
    let getAllTurnedCards = document.querySelectorAll('.turned');
    let turnedCards = getAllTurnedCards.length;
    if(totalCards === turnedCards){
        //play music when game is completed
        playWinningSound();
    }else{
        applause.play();
    }
}

function turnCard() {
    if (lockCards) {
        return;
    }
    if (this === firstCard) {
        return;
    }
    this.classList.toggle('turned');
    //Play soundeffect when turned. :)
    turnSound();

    if(!hasTurnedCard) {
        hasTurnedCard = true;
        firstCard = this;
    } else {
        hasTurnedCard = false;
        secondCard = this;
    
    if (firstCard.dataset.image === secondCard.dataset.image) {
        //match!
        //Let's count cards and play a little tune...
        endOfGame();
        firstCard.removeEventListener('click', turnCard);
        secondCard.removeEventListener('click', turnCard);

        // Global variable defined before
        gameScore = addScore(gameScore);
        scoreCard.innerHTML = gameScore;

    } else {
        //nomatch, try again loser. - on score
        lockCards = true;
        setTimeout(() => {
            firstCard.classList.remove('turned');
            secondCard.classList.remove('turned');
        
        // Global variable defined before 
        gameScore = minusScore(gameScore);
        scoreCard.innerHTML = gameScore;
        
        lockCards = false;
        }, 2000);
    }

function resetGameTurn() {
    [hasTurnedCard, lockCards] = [false, false];
    [firstCard, secondCard] = [null, null];
}    
    }
};

(function mix() {
    //randomize the cards on the game-board
    cards.forEach(card => {
        let randomOrder = Math.floor(Math.random() * 20);
        card.style.order = randomOrder;
    });
})();

//add a listener to all cards so I can CSS transform the cards later with sound effects.
cards.forEach(card => card.addEventListener('click', turnCard));