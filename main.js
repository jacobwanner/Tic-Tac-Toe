let gridboxContainer = document.createElement('div');
gridboxContainer.id = 'gridbox-container';
document.body.appendChild(gridboxContainer);

let gridbox = []
let whosTurn = '';

const gameBoard = (() => {
    let gameBoardGrid = ['', '', '', '', '', '', '', '', ''];
    let CoinFlip = () => {
        let rng = Math.floor(Math.random() * 2);
        console.log(rng); //will take this out once complete
        if(rng === 0){
            return whosTurn = 'O';
        }else if(rng === 1){
            return whosTurn = 'X';
        }
    }
    return {
        gameBoardGrid,
        CoinFlip,
    };
})();

gameBoard.CoinFlip()

console.log(whosTurn) //will take this out once complete

for (let i = 0; i < gameBoard.gameBoardGrid.length; i++){
    gridbox = gridbox['gridbox_'+i]
    gridbox = document.createElement('div');
    gridbox.id = 'gridbox_'+i;
    gridbox.className = 'gridboxes';
    document.getElementById('gridbox-container').appendChild(gridbox);
    gridbox.innerHTML = gameBoard.gameBoardGrid[i];
    gridbox.addEventListener('click', () => {
        if(whosTurn === 'X'){
            event.target.innerHTML = 'X';
            return whosTurn = 'O';
        } else if(whosTurn === 'O'){
            event.target.innerHTML = 'O';
            return whosTurn = 'X';
        } else return console.log('error deciding whos turn it is');
    });
}

// if(gameBoard.gameBoardGrid[0, 1, 2] || gameBoard.gameBoardGrid[ 0, 4 ,8] || gameBoard.gameBoardGrid[0, 3, 6]
//     || gameBoard.gameBoardGrid[1, 4, 7] || gameBoard.gameBoardGrid[2, 4, 6] || gameBoard.gameBoardGrid[2, 5, 8]
//     || gameBoard.gameBoardGrid[3, 4, 5] || gameBoard.gameBoardGrid[6, 7 ,8] === gameBoard.gameBoardGrid['X', 'X', 'X'] || gameBoardGrid['O', 'O', 'O'])
//     { 
//         console.log('winner winner');
// };
