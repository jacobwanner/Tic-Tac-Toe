let whosTurn = '';
const resultsDiv = document.getElementById('results');
const allBoxes = document.querySelectorAll('.box')

const board = (() => {
    let gameBoard = [
        '', '', '',
        '', '', '',
        '', '', ''
    ];
    const createBoard = () => {
        for (let i = 0; i < gameBoard.length; i++) {
            gridbox = document.createElement('div');
            gridbox.id = i;
            gridbox.className = 'box';
            document.getElementById('gridbox-container').appendChild(gridbox);
            gridbox.innerHTML = gameBoard[i];
            gridbox.addEventListener('click', player.turnHandler);
        }
    }
    const endGame = () => {
            allBoxes.forEach(box => {
            box.removeEventListener('click', turnHandler);
        });
    }
    return {
        gameBoard,
        createBoard,
        endGame,
    };
})();

const player = (() => {
    let CoinFlip = () => {
        let rng = Math.floor(Math.random() * 2);
        if(rng === 0){
            return whosTurn = 'O';
        }else if(rng === 1){
            return whosTurn = 'X';
        }
    };
    let turnHandler = (e) => {
        let cell = e.target;
        cell.removeEventListener('click', turnHandler);
        console.log(cell)
        if(whosTurn === 'X'){
            board.gameBoard.splice(cell.id, 1, 'X');
            cell.innerHTML = board.gameBoard[cell.id];
            findWinner();
            whosTurn = 'O';
        } else if(whosTurn === 'O'){
            board.gameBoard.splice(cell.id, 1, 'O');
            cell.innerHTML = board.gameBoard[cell.id];
            findWinner();
            whosTurn = 'X';
        }
        cell.className = 'player' + whosTurn;
    }
    let findWinner = () => {
        if (board.gameBoard[0] === whosTurn) {
            if (board.gameBoard[1] === whosTurn && board.gameBoard[2] === whosTurn) {
                resultsDiv.innerHTML = `player ${whosTurn} wins across the top`;
            }
            if (board.gameBoard[3] === whosTurn && board.gameBoard[6] === whosTurn) {
                resultsDiv.innerHTML = `player ${whosTurn} wins down the left`;
            }
            if (board.gameBoard[4] === whosTurn && board.gameBoard[8] === whosTurn) {
                resultsDiv.innerHTML = `player ${whosTurn} wins diagonally from top right to bottom left`;
            }
        }
        if (board.gameBoard[8] === whosTurn) {
            if (board.gameBoard[2] === whosTurn && board.gameBoard[5] === whosTurn) {
                resultsDiv.innerHTML = `player ${whosTurn} wins down the right`;
            }
            if (board.gameBoard[6] === whosTurn && board.gameBoard[7] === whosTurn) {
                resultsDiv.innerHTML = `player ${whosTurn} wins across the bottom`;
            }
        }
        if (board.gameBoard[4] === whosTurn) {
            if (board.gameBoard[1] === whosTurn && board.gameBoard[7] === whosTurn) {
                resultsDiv.innerHTML = `player ${whosTurn} wins vertically in the middle`;
            }
            if (board.gameBoard[3] === whosTurn && board.gameBoard[5] === whosTurn) {
                resultsDiv.innerHTML = `player ${whosTurn} wins horizontally in the middle`;
            }
            if (board.gameBoard[2] === whosTurn && board.gameBoard[6] === whosTurn) {
                resultsDiv.innerHTML = `player ${whosTurn} wins diagonally from top left to bottom right `;
            }
        }
    }
    return {
        whosTurn, 
        CoinFlip,
        turnHandler,
        findWinner,
    }
})();

const gameStart = () => {
    board.createBoard()
    player.CoinFlip()
    resultsDiv.innerHTML = "player" + ' "' + whosTurn + '" ' + "will go first.";
}

gameStart();
