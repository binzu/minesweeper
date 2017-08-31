const printBoard = board => {
  // Log the current board
  console.log('Current Board: ');
  // Log the first element of the board
  console.log(board[0].join(' | '));
  console.log(board[1].join(' | '));
  console.log(board[2].join(' | '));
};
const board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];
printBoard(board);
board[0][1] = '1';
board[1][2] = 'B';
printBoard(board);
