const { createCard } = require('./card');
const { prototypeData } = require('./data');

function createDeck() {
    const deck = prototypeData.map(cardData => createCard(cardData.id, cardData.question, cardData.answers, cardData.correctAnswer))
    return deck;
}

// console.log("createDeck invocation>>>", createDeck());

module.exports = {
    createDeck,
    createCard
}