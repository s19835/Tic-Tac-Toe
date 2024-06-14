export default class Player {
    constructor(maxDepth = -1) {
        this.maxDepth = maxDepth;
        this.nodesMap = new Map();
    }
    getBestMove(board, maximizing = true, callback = () => {}, depth) {
        //check if its a new move
        if (depth == 0) this.nodesMap.clear();

        if (board.isTerminal() || depth == this.maxDepth) {
            if (board.isTerminal().winner === 'X') return 100 - depth;
            else if (board.isTerminal().winner === 'O') return -100 + depth;
        }
        return 0;
    }
}