const chai = require('chai');
const expect = chai.expect;

const { createDeck, createCard } = require('../src/deck');

describe('deck', function() {
  it.skip('should be a function', function() {
    expect(createDeck).to.be.a('function');
  });

  it.skip('should create an array of the deck of cards', function() {
    const deck = createDeck();
    expect(deck).to.be.an('array')
  });  

  it.skip('cards should have properties', function() {
    const deck = createDeck()
    const card1 = deck[0]
    expect(card1).to.have.property('id');
    expect(card1).to.have.property('question');
    expect(card1).to.have.property('answers');
    expect(card1).to.have.property('correctAnswer');
  });  
});
