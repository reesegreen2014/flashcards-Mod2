const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

function printMessage(deck) {
  console.log(`Welcome to FlashCards! You are playing with ${countCards(deck)} cards.
  -----------------------------------------------------------------------`);
}

function printQuestion(round) {
  util.main(round);
}

function evaluateGuess(guess, correctAnswer){
  if(guess === correctAnswer){
    return 'Correct!'
  } else {
    return 'Incorrect!'
  }
}

module.exports = { printMessage, printQuestion, evaluateGuess };
