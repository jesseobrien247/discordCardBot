//DRAW CARD FUNCTION
function drawCard() {
  do {
    player1.push(stock[stock.length - 1]);
    stock.pop();
  }
  while (player1.length < 5)
}

//DEAL DECK FUNCTION
function dealDeck() {
  j = 0;
  do {
    let i = 0;
    do {
      playerDecks[j].push(deck[deck.length - 1]);
      deck.pop();
      i += 1;
    } while (i < 5)
    j += 1;
  }
  while (playerCount > j)

  do {
    stock.push(deck[deck.length - 1]);
    deck.pop();
  } while (deck.length > 0)
};

//SHUFFLE DECK FUNCTION
function shuffle(array) {
  var currentIndex = array.length,
    randomIndex;

  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]
    ];
  }

  return array;
}

function shuffleDeck() {
  const shuffleCardValue = ["AH", "2H", "3H", "4H", "5H", "6H", "7H", "8H", "9H", "10H", "JH", "QH", "KH", "AC", "2C", "3C", "4C", "5C", "6C", "7C", "8C", "9C", "10C", "JC", "QC", "KC", "AD", "2D", "3D", "4D", "5D", "6D", "7D", "8D", "9D", "10D", "JD", "QD", "KD", "AS", "2S", "3S", "4S", "5S", "6S", "7S", "8S", "9S", "10S", "JS", "QS", "KS"];
  const shufflePosition = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52];
  shuffle(shufflePosition);

  let i = 0;
  do {

    let cardValue = shuffleCardValue[i];
    let position = shufflePosition[i];
    deck.push({
      cardValue,
      position
    });

    i += 1;
  } while (i < 52)

  deck.sort((a, b) => (a.position > b.position ? 1 : -1))
}