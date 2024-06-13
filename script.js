import Board from "./classes/board.js";

const board = new Board(["X", "O", "X", "X", "O", "O", "O", "O", "O"]);

board.printFormattedBoard();

// console.log(board.isEmpty());
// console.log(board.isFull());
// console.log(board.isTerminal());