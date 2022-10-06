const gameBoard = (() => {
    let gameBoardGrid = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    let topLeft = gameBoardGrid[0];
    let topMiddle = gameBoardGrid[1];
    let topRight = gameBoardGrid[2];
    let middleLeft = gameBoardGrid[3];
    let center = gameBoardGrid[4];
    let middleRight = gameBoardGrid[5];
    let bottomLeft = gameBoardGrid[6];
    let bottomMiddle = gameBoardGrid[7];
    let bottomRight = gameBoardGrid[8];
    // if(gameBoardGrid[0, 1, 2] || gameBoardGrid[ 0, 4 ,8] || gameBoardGrid[0, 3, 6]
    //     || gameBoardGrid[1, 4, 7] || gameBoardGrid[2, 4, 6] || gameBoardGrid[2, 5, 8]
    //     || gameBoardGrid[3, 4, 5] || gameBoardGrid[6, 7 ,8] === gameBoardGrid['x', 'x', 'x'] || gameBoardGrid['o', 'o', 'o'])
    //     { 
    //         console.log('winner winner');
    //     };
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
        bottomRight
    };
})();

let gridboxContainer = document.createElement('div');
gridboxContainer.id = 'gridbox-container';
document.body.appendChild(gridboxContainer);

let gridbox = []

for (let i = 0; i < gameBoard.gameBoardGrid.length; i++){
    gridbox = gridbox['gridbox_'+i]
    gridbox = document.createElement('div');
    gridbox.id = 'gridbox_'+i;
    gridbox.className = 'gridboxes';
    document.getElementById('gridbox-container').appendChild(gridbox);
    gridbox.innerHTML = gameBoard.gameBoardGrid[i];
}

// const playerX = () => {
//     document.getElementsByClassName('gridbox').addEventListener('click', () => {
        
//     });
// }

// const playerO = () => {
//     document.getElementsByClassName('gridbox').addEventListener('click', () => {
//         console.log("is now changed to o")
//     });
// }
