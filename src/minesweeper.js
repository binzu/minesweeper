

const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
  let board = [];
  for (let i=0; i<numberOfRows; i++) {
    let row = [];
    for (let j=0; j<numberOfColumns; j++) {
      row.push(' ');
    }
    board.push(row);
  }
  return board;
}

// console.log(generatePlayerBoard(2,3));

const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
  let board = [];
  let numberOfBombsPlaced = 0;
  for (let i=0; i<numberOfRows; i++) {
    let row = [];
    for (let j=0; j<numberOfColumns; j++) {
      row.push(null);
    }
    board.push(row);
  }
  while (numberOfBombsPlaced<numberOfBombs) {
    // Generate a random row index
    let randomRowIndex = Math.floor(Math.random()*numberOfRows);
    // Generate a random column index
    let randomColumnIndex = Math.floor(Math.random()*numberOfColumns);
    // Place the bomb at that row and columns
    board[randomRowIndex][randomColumnIndex] = 'B';
    // TODO: check if place on board already has a bomb
    // Increment numberOfBombsPlaced
    numberOfBombsPlaced++;
  }

  return board;
}

const printBoard = board => {
  // board.map(row => row.join(' | ')).join('\n');
  console.log(board.map(row => row.join(' | ')).join('\n'));
};

let playerBoard = generatePlayerBoard(3,4);
let bombBoard = generateBombBoard(3,4,5);
console.log('Player Board: ');
printBoard(playerBoard);
console.log('Bomb Board: ');
printBoard(bombBoard);
