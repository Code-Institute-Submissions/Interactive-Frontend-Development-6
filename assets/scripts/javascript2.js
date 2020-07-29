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
/*let gamescore = 0;

function totalScore () {
    for (gamescore; gamescore < 100; gamescore+=10) { 
    getElementById("score");  
}*/

function newGame() {
    //new game button that reset the gameboard
    location.reload();
}

function turnSound() {
    //play that funky music white boy...
    turnSFX.play();
    //console.log("Turn sound played.");
}

/*function playapplause () {
    //play applause when 2 cards match
    applause.play();
}*/

function playWinningSound () {
    //winning sound when game is finished
    winningSound.play();
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
        /*playapplause();*/
        firstCard.removeEventListener('click', turnCard);
        secondCard.removeEventListener('click', turnCard);

        function endOfGame() { 
            let totalCards = cards.length;
            let getAllTurnedCards = document.querySelectorAll('.turned');
            let turnedCards = getAllTurnedCards.length;
            console.log(cards.length, getAllTurnedCards.length);
            if(totalCards === turnedCards){
            //play music when game is completed
            playWinningSound();
            }
        }

    } else {
        //nomatch, try again loser. - on score
        //play sad tone... :)
        lockCards = true;
        setTimeout(() => {
            firstCard.classList.remove('turned');
            secondCard.classList.remove('turned');
        
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