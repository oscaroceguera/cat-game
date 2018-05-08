import { newGame, gameover, switchPlayer, winner, movePlayer } from './actions'
import { isWinner, isDraw } from '../../utils/game'

const checkWinner = (board, player) => (dispatch) => {
  // the logic to check if a player has won or the game ended in a draw are in 
  // the utils/game.js file.

  // instead of returning a promise like we would if we were making an api call
  // from our operations, we just return a boolean for the game winner
  let hasWinner = true;

  if (isWinner(board, player)) {
    dispatch(winner(player));
    dispatch(gameover());
  } else if (isDraw(board)) {
    dispatch(winner(0));
    dispatch(gameover());
  } else {
    hasWinner = false;
  }

  return hasWinner;
}

const playTurn = (player, row, col) => (dispatch) => {
  let nextPlayer

  switch (player) {
    case 1:
      nextPlayer = 2
      break
    case 2:
      nextPlayer = 1
      break
    default:
      break
  }

  dispatch(movePlayer(player, row, col))
  dispatch(switchPlayer(nextPlayer))
}

export {
  newGame,
  checkWinner,
  playTurn
}
