const cards = document.querySelectorAll(".card");
//load Sound SFX for cardturning.
const turnSFX = document.getElementById("turnSFX");
//console.log(turnSFX);
let hasTurnedCard = false;
let firstCard, secondCard;

function turnSound() {
    //play that funky music white boy...
    turnSFX.play();
    //console.log("Turn sound played.");
}

function turnCard() {
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
        //Play a victory song
        firstCard.removeEventListener('click', turnCard);
        secondCard.removeEventListener('click', turnCard);
    }
    }
}
//add a listener to all cards so I can CSS transform the cards later with sound effects.
cards.forEach(card => card.addEventListener('click', turnCard));