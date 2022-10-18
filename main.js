let whosTurn = '';
const winningCombinations = [
    [0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]
]
let winner = null;

const gameBoard = (() => {
    let CoinFlip = () => {
        let rng = Math.floor(Math.random() * 2);
        if(rng === 0){
            return whosTurn = 'O';
        }else if(rng === 1){
            return whosTurn = 'X';
    }};
    const allBoxes = document.querySelectorAll('.box');
    let handleTurn = () => {
        allBoxes.forEach(box => {
            box.addEventListener('click', () => {
                event.target.innerHTML = whosTurn;
                if(whosTurn === 'X'){
                    event.target.innerHTML = 'X';
                    whosTurn = 'O';
                } else if(whosTurn === 'O'){
                    event.target.innerHTML = 'O';
                    whosTurn = 'X';
                }
                winningCombos.forEach(() => {
                   
                });
        });
    }

    return {
        CoinFlip,
        allBoxes,
        handleTurn
    };
})();

const gameStart = () => {
gameBoard.CoinFlip()
gameBoard.handleTurn()
console.log("player" + ' "' + whosTurn + '" ' + "will go first.")
}

gameStart()



// let player = () => {
//     let X = () => {

//     }
//     let O = () => {

//     }
// }
