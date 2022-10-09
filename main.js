let gridboxContainer = document.createElement('div');
gridboxContainer.id = 'gridbox-container';
document.body.appendChild(gridboxContainer);

let gridbox = []
let whosTurn = '';
function CoinFlip(){
    let rng = Math.floor(Math.random() * 2);
    console.log(rng);
    if(rng === 0){
        return whosTurn = 'O';
    }else if(rng === 1){
        return whosTurn = 'X';
    }
}
CoinFlip()
const gameBoard = (() => {
    let gameBoardGrid = [0, 1, 2, 3, 4, 5, 6, 7, 8]; //make a grid design before changing lol
    // if(gameBoardGrid[0, 1, 2] || gameBoardGrid[ 0, 4 ,8] || gameBoardGrid[0, 3, 6]
    //     || gameBoardGrid[1, 4, 7] || gameBoardGrid[2, 4, 6] || gameBoardGrid[2, 5, 8]
    //     || gameBoardGrid[3, 4, 5] || gameBoardGrid[6, 7 ,8] === gameBoardGrid['x', 'x', 'x'] || gameBoardGrid['o', 'o', 'o'])
    //     { 
    //         console.log('winner winner');
    //     };
    return {
        gameBoardGrid
    };
})();
console.log(whosTurn)
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
