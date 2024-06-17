import Board from "./classes/board.js";
import Player from "./classes/player.js";

const board = new Board(["X", "O", "X", "", "O", "O", "O", "X", ""]);

board.printFormattedBoard();

console.log(board.isEmpty());
console.log(board.isFull());
console.log(board.getAvailableMoves());
// console.log(board.insert('x', 4));
console.log(board.insert('X', 8));
// console.log(board.insert('X', 10));
console.log(board.insert('X', 3));
console.log(board.isTerminal());

board.printFormattedBoard();
const p = new Player();
console.log(p.getBestMove(board));
console.log(p.nodesMap)
