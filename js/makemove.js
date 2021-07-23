//MAKE MOVE FUNCTION
function makeMove(event) {
    proposedMove = event.target.id;

    //Ace
    if (['AH', 'AC', 'AD', 'AS'].includes(proposedMove)) {
        if (['', '10', 'J', 'Q', 'K', 'A'].includes(topCard)) {
            successfulMove();
        }
    }

    //King
    else if (['KH', 'KC', 'KD', 'KS'].includes(proposedMove)) {
        if (['7', '8', '9', '10', 'J', 'Q', 'K'].includes(topCard)) {
            successfulMove();
        }
    }

    //Queen
    else if (['QH', 'QC', 'QD', 'QS'].includes(proposedMove)) {
        if (['7', '8', '9', '10', 'J', 'Q'].includes(topCard)) {
            successfulMove();
        }
    }

    //Jack
    else if (['JH', 'JC', 'JD', 'JS'].includes(proposedMove)) {
        if (['7', '8', '9', '10', 'J'].includes(topCard)) {
            successfulMove();
        }
    }

    //10
    else if (['10H', '10C', '10D', '10S'].includes(proposedMove)) {
        if (['', '3', '4', '5', '6', '7', '8', '9', '10'].includes(topCard)) {
            successfulMove();
        }
    }

    //9
    else if (['9H', '9C', '9D', '9S'].includes(proposedMove)) {
        if (['', '3', '4', '5', '6', '7', '8', '9'].includes(topCard)) {
            successfulMove();
        }
    }

    //8
    else if (['8H', '8C', '8D', '8S'].includes(proposedMove)) {
        if (['', '3', '4', '5', '6', '7', '8'].includes(topCard)) {
            successfulMove();
        }
    }

    //7
    else if (['7H', '7C', '7D', '7S'].includes(proposedMove)) {
        if (['', '3', '4', '5', '6', '7'].includes(topCard)) {
            successfulMove();
        }
    }

    //6
    else if (['6H', '6C', '6D', '6S'].includes(proposedMove)) {
        if (['', '3', '4', '5', '6'].includes(topCard)) {
            successfulMove();
        }
    }

    //5
    else if (['5H', '5C', '5D', '5S'].includes(proposedMove)) {
        if (['', '3', '4', '5'].includes(topCard)) {
            successfulMove();
        }
    }

    //4
    else if (['4H', '4C', '4D', '4S'].includes(proposedMove)) {
        if (['', '3', '4'].includes(topCard)) {
            successfulMove();
        }
    }

    //3
    else if (['3H', '3C', '3D', '3S'].includes(proposedMove)) {
        if (['', '3'].includes(topCard)) {
            successfulMove();
        }
    }

    //2
    else if (['2H', '2C', '2D', '2S'].includes(proposedMove)) {
        if (['', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'].includes(topCard)) {
            successfulMove();
        }
    }

    //success
    function successfulMove() {
        topCard = proposedMove;
        topCard = topCard.slice(0, -1)
        removeCard = player1.map(function (e) {
            return e.cardValue;
        }).indexOf(proposedMove);
        player1.splice(removeCard, 1);
        discardPile.push(removeCard);
        if (player1.length < 5) {
            drawCard();
        }
        updateBoard();
    }
};