/*
  rows          crosses       columns
  ['X','X','X'] ['X',' ',' '] ['X',' ',' ']
  [' ',' ',' '] [' ','X',' '] ['X',' ',' ']
  [' ',' ',' '] [' ',' ','X'] ['X',' ',' ']
                
  [' ',' ',' '] [' ',' ',' '] [' ','X',' ']
  ['X','X','X'] [' ',' ',' '] [' ','X',' ']
  [' ',' ',' '] [' ',' ',' '] [' ','X',' ']
  
  [' ',' ',' '] [' ',' ','X'] [' ',' ','X']
  [' ',' ',' '] [' ','X',' '] [' ',' ','X']
  ['X','X','X'] ['X',' ',' '] [' ',' ','X']
*/
const winningPatterns = [
  // rows
  [{ r: 0, c: 0 }, { r: 0, c: 1 }, { r: 0, c: 2 }],
  [{ r: 1, c: 0 }, { r: 1, c: 1 }, { r: 1, c: 2 }],
  [{ r: 2, c: 0 }, { r: 2, c: 1 }, { r: 2, c: 2 }],
  // crosses
  [{ r: 0, c: 0 }, { r: 1, c: 1 }, { r: 2, c: 2 }],
  [{ r: 0, c: 2 }, { r: 1, c: 1 }, { r: 2, c: 0 }],
  // columns
  [{ r: 0, c: 0 }, { r: 1, c: 0 }, { r: 2, c: 0 }],
  [{ r: 0, c: 1 }, { r: 1, c: 1 }, { r: 2, c: 1 }],
  [{ r: 0, c: 2 }, { r: 1, c: 2 }, { r: 2, c: 2 }]
]

const isWinner = (board, player) => {
  return winningPatterns.some(pattern => pattern.every(square => {
    const { r, c } = square

    return board[r][c] === player
  }))
}

const isDraw = (board) => {
  // if there are squares that have a 0 in them, that means the 
  // game is still in-progress
  const notDraw = board.some(row => row.some(col => col === 0))

  return !notDraw
}

export {
  isWinner,
  isDraw
}