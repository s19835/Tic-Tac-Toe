export default class Player {
    constructor(maxDepth = -1) {
        this.maxDepth = maxDepth;
        this.nodesMap = new Map();
    }
    getBestMove(board, maximizing = true, callback = () => {}, depth) {
        //check if its a new move
        if (depth == 0) this.nodesMap.clear();

        //check the terminal state
        if (board.isTerminal() || depth == this.maxDepth) {
            if (board.isTerminal().winner === 'X') return 100 - depth;
            else if (board.isTerminal().winner === 'O') return -100 + depth;
            return 0;
        }

        if (maximizing) {
            let best = -100;
            board.getAvailableMoves().forEach(index => {
                //initializing a new board with current state
                const child = new board([...board.state]);
                child.insert('X', index);

                //now get the best move from current board
                const nodeVlaue = this.getBestMove(child, false, callback, depth+1)
                best = Math.max(best, nodeVlaue);

                if (depth == 0) {
                    const moves = this.nodesMap.has(nodeVlaue) ? `${this.nodesMap.get(nodeVlaue)}, ${index}` : index;
                    this.nodesMap.set(nodeVlaue, moves);
                }
            });
        }
    }
}