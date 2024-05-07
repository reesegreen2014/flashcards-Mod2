const { createCard } = require('./card');
const { prototypeData } = require('./data');

function createDeck() {
    const deck = prototypeData.map(cardData => createCard(cardData.id, cardData.question, cardData.answers, cardData.correctAnswer))
    return deck;
}

const deck = createDeck();

// console.log({deck})


module.exports = {
    createDeck,
    createCard
}