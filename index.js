// Blackjack Game
let cards = [];
let sum = 0
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.querySelector("#message-el");
let cardsEl = document.querySelector("#cards-el");
let sumEl = document.querySelector("#sum-el");
let neededEl = document.querySelector("#needed-el");

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13 + 1);
    if (randomNumber === 1) {
        return 11;
    } else if (randomNumber > 10) {
        return 10;
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
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
        neededEl.textContent = "You still need " + (21-sum) + " points to win";
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        neededEl.textContent = "";
        message = "Wohoo! You've got Blackjack!";
        hasBlackJack = true;
    } else {
        neededEl.textContent = "";
        isAlive = false;
        message = "You're out of the game!";
    }
    messageEl.textContent = message;
}

function newCard() {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    startGame();
}

function resetGame() {
    isAlive = true;
    hasBlackJack = false;
    messageEl.textContent = "Want to play a round?";
    cardsEl.textContent = "Cards:";
    sumEl.textContent = "Sum:";
}
