const { createCard } = require('./card');
const { prototypeData } = require('./data');

function createDeck() {
    return prototypeData.map(cardData => createCard(cardData.id, cardData.question, cardData.answers, cardData.correctAnswer))
}

// console.log("createDeck invocation>>>", createDeck());

module.exports = {
    createDeck,
    createCard
}