const cards = document.querySelectorAll(".card");
//load Sound SFX for cardturning.
const turnSFX = document.getElementById("turnSFX");
//console.log(turnSFX);
let hasTurnedCard = false;
let firstCard, secondCard;
let lockCards = false;

function turnSound() {
    //play that funky music white boy...
    turnSFX.play();
    //console.log("Turn sound played.");
}

function turnCard() {
    if (lockCards) {return;
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
        //Play a victory song
        firstCard.removeEventListener('click', turnCard);
        secondCard.removeEventListener('click', turnCard);
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
}

(function mix() {
    cards.forEach(card => {
        let randomOrder = Math.floor(Math.random() * 20);
        card.style.order = randomOrder;
    });
})();
//add a listener to all cards so I can CSS transform the cards later with sound effects.
cards.forEach(card => card.addEventListener('click', turnCard));