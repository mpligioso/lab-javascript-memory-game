function MemoryGame (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCard = function (cardsArr) {
  return _.shuffle(cardsArr);
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked++;
  if (firstCard === secondCard) {
    this.pairsGuessed++;
    return true
  }
  return false;
};

MemoryGame.prototype.finished = function () {
  // if (this.pairsClicked.length === 0) {
  //   return false;
  // }
  if (this.pairsGuessed === (cards.length)/2){
    alert('Great job! You won :)')
    return true;
  };
  return false;
};
