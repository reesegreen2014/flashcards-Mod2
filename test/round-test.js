const chai = require('chai');
const expect = chai.expect;
const { createRound, takeTurn } = require('../src/round');
const {createDeck} = require('../src/deck')

describe('createRound', function() {
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

describe('takeTurn', function() {
  it.skip('should be a function', function() {
    expect(takeTurn).to.be.a('function');
  });

  it.skip('should update turn count and current card', function() {
    const deck = createDeck();
    const round = createRound(deck);

    takeTurn(round.currentCard.correctAnswer, round)


    expect(round.turns).to.equal(1)
    expect(round.currentCard).to.equal(deck[1])
  });  

  it.skip('should store')
});
