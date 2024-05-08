const chai = require('chai');
const expect = chai.expect;
const { createRound } = require('../src/round');
const {createDeck} = require('../src/deck')

describe('card', function() {
  it.skip('should be a function', function() {
    expect(createRound).to.be.a('function');
  });

  it.skip('should create round object with multiple properties', function() {
    const deck = createDeck();
    const currentCard = deck[0];
    const round = createRound(deck, currentCard, 0, []);
    
    expect(round.deck).to.equal(deck);
    expect(round.currentCard).to.equal(currentCard);
    expect(round.turns).to.equal(0);
    expect(round.incorrectGuesses).to.deep.equal([]);
  });  
});
