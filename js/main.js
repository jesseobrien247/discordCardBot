let deck = [],
    playerCount = 6,
    playerTurn = 1,
    player1 = [],
    player2 = [],
    player3 = [],
    player4 = [],
    player5 = [],
    player6 = [],
    playerDecks = [player1, player2, player3, player4, player5, player6],
    playerList = ["player1", "player2", "player3", "player4", "player5", "player6"],
    stock = [],
    discardPile = [],
    emptyPile = true,
    topCard = "",
    proposedMove,
    j,
    player = 1;

function onload() {
    //deal.js
    shuffleDeck();
    dealDeck();

    //updateboard.js
    updateBoard();

    //makemove.js
    makeMove();
    //pickupdeck

    //check score
}

window.onload = onload();