//CLEARBOARD FUNCTION
function clearBoard() {

    j = 0;
    do {
        var div = document.getElementById(playerList[j] + 'Image');
        while (div.firstChild) {
            div.removeChild(div.firstChild);
        }
        j += 1;
    }
    while (playerCount > j)

    var div = document.getElementById('stockPile');
    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }

    var div = document.getElementById('discardPile');
    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }

}

//UPDATEBOARD FUNCTION
function updateBoard() {

    clearBoard();

    j = 0;
    do {
        let i = 0;

        var e = document.getElementById(playerList[j] + 'Text');
        e.innerHTML = "<h1>" + "You" + "</h1>" +
            "<p>" + "Card Count = " + playerDecks[j].length + "</p>" + "<br>";

        i = 0;
        do {
            var img = document.createElement('img');
            img.src = 'images/faces/' + playerDecks[j][i].cardValue + '.png';
            img.className = playerList[j] + 'Card';
            img.id = playerDecks[j][i].cardValue;
            document.getElementById(playerList[j] + 'Image').appendChild(img);
            document.getElementById(playerDecks[j][i].cardValue).addEventListener("click", makeMove);
            i += 1;
        } while (i < playerDecks[j].length)
        j += 1;
    }
    while (playerCount > j)

    var e = document.getElementById('middleAreaTop');
    e.innerHTML = "<h1>" + "Middle Area" + "</h1>" +
        "<p>" + "Stock Pile Count = " + stock.length + "</p>" +
        "<p>" + "Discard Pile Count = " + discardPile.length + "</p>" +
        "<p>" + "Most Recent Card = " + proposedMove + "</p>";

    if (stock.length > 0) {
        var img = document.createElement('img');
        img.src = 'images/backs/blue_back.png';
        document.getElementById('stockPile').appendChild(img);
    }

    if (discardPile.length > 0) {
        var img = document.createElement('img');
        img.src = 'images/faces/' + proposedMove + '.png';
        document.getElementById('discardPile').appendChild(img);
    }

};
