
let cards = [];

let isAlive = false;
let sum = 0;
let hasBlackJack = false;

let message = "";

let player = {
  name : "Per",
  chips : 145,
  sayHello : function() {
    console.log("Hello " + this.name);
  }
}
player.sayHello();

let sumEl = document.getElementById("sum-el");

let cardsEl = document.getElementById("cards-el"); 

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard() {

    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber > 10) {
        return 10;
    } else if (randomNumber === 1) {
        return 11;
    } else {
        return randomNumber;
    }
}

function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

function renderGame() {
   cardsEl.textContent = "Cards: " 

   for (let i = 0; i < cards.length; i++) {
         cardsEl.textContent +=  cards[i] + " ";
   }

 sumEl.textContent = "Sum: " + sum;
if (sum < 21){
    message="Do you want to draw a new card? "
} else if (sum === 21){
    message="Blackjack!"
    hasBlackJack = true;
}
else {
    message="You are out of the game!"
    isAlive = false;
}
document.getElementById("message-el").textContent = message;
}


function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard();
        sum += card; 
        cards.push(card);
        renderGame();

    }
    


}