const { createCard } = require('./card');
const { createDeck } = require('./deck');

function createRound(deck, currentCard = deck[0], turns, incorrectGuesses = []) {
    var newRound = {
        deck: deck,
        currentCard: currentCard,
        turns: turns || 0,
        incorrectGuesses: incorrectGuesses
    }
    return newRound;
}

const card = createCard();
const deck = createDeck();

console.log("this is the createRound invocation>>>", createRound(deck));

module.exports = {
    createRound
}