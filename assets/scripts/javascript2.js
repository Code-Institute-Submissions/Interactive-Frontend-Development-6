const cards = document.querySelectorAll(".card");
//load Sound SFX for cardturning.
const turnSFX = document.getElementById("turnSFX");
//console.log(turnSFX);
const winningSound = document.getElementById("winningSound");
//play sound when the game is finished
const applause = document.getElementById("applause");

let hasTurnedCard = false;
let firstCard, secondCard;
let lockCards = false;
let gameScore = 0;
let scoreCard = document.getElementById("score");

function newGame() {
    //new game button that reset the gameboard
    location.reload();
}

function turnSound() {
    //play that funky music white boy...
    turnSFX.play();
    //console.log("Turn sound played.");
}

/*function playApplause () {
    //play applause when 2 cards match
    applause.play();
}*/

function playWinningSound () {
    //winning sound when game is finished
    winningSound.play();
}

function endOfGame() {
    console.log("endOfGame has been called and executed.");
    let totalCards = cards.length;
    let getAllTurnedCards = document.querySelectorAll('.card turned');
    let turnedCards = getAllTurnedCards.length;
    console.log(totalCards, turnedCards);
    console.log("This sucks");
    if(totalCards === turnedCards){
        //play music when game is completed
        console.log("Playing Endgame tone... IF-statement TRUE");
        playWinningSound();
    }else{
        console.log("We have a matching pair but no candy... IF-statement FALSE");
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
    //console.log("This card has turned: ",this);
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
        //Play an applause song
        //Call endOfGame 
        console.log("Calling endOfGame function now");
        endOfGame();
        firstCard.removeEventListener('click', turnCard);
        secondCard.removeEventListener('click', turnCard);

        // Global variable defined before
        gameScore+=10;
        scoreCard.innerHTML = gameScore;

    } else {
        //nomatch, try again loser. - on score
        //play sad tone... :)
        lockCards = true;
        setTimeout(() => {
            firstCard.classList.remove('turned');
            secondCard.classList.remove('turned');
        
        // Global variable defined before 
        gameScore -=5;
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