const gameBoard = (() => {
    let gameBoardGrid = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let topLeft = gameBoardGrid[1];
    let topMiddle = gameBoardGrid[2];
    let topRight = gameBoardGrid[3];
    let middleLeft = gameBoardGrid[4];
    let center = gameBoardGrid[5];
    let middleRight = gameBoardGrid[6];
    let bottomLeft = gameBoardGrid[7];
    let bottomMiddle = gameBoardGrid[8];
    let bottomRight = gameBoardGrid[9];
    if(gameBoardGrid[0, 1, 2] || gameBoardGrid[ 0, 4 ,8] || gameBoardGrid[0, 3, 6]
        || gameBoardGrid[1, 4, 7] || gameBoardGrid[2, 4, 6] || gameBoardGrid[2, 5, 8]
        || gameBoardGrid[3, 4, 5] || gameBoardGrid[6, 7 ,8] === 'x' || 'o')
        { 
            console.log('winner winner');
        };
    return {
        gameBoardGrid,
        topLeft,
        topMiddle,
        topRight,
        middleLeft,
        center,
        middleRight,
        bottomLeft,
        bottomMiddle,
        bottomRight,
        gameWon
    };
})();

let gridboxContainer = document.createElement('div');
gridboxContainer.id = 'gridbox-container';
document.body.appendChild(gridboxContainer);

for (let i = 0; i < gameBoard.gameBoardGrid.length; i++){
    let gridbox = document.createElement('div');
    document.getElementById('gridbox-container').appendChild(gridbox);
}

const playerX = () => {
    addEventListener('click', () => {
        
    });
}

const playerO = () => {
    addEventListener('click', () => {
        
    });
}
