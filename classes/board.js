export default class Board {
    constructor(state = ["", "", "", "", "", "", "", "", ""]) {
        this.state = state;
    }
    printFormattedBoard() {
        let formattedString = '';
        this.state.forEach((cell, index) => {
            formattedString += cell ? ` ${cell} |` : '   |';
            if((index + 1) % 3 === 0)  {
                formattedString = formattedString.slice(0,-1);
                if(index < 8) formattedString += '\n\u2015\u2015\u2015 \u2015\u2015\u2015 \u2015\u2015\u2015\n';
            }
        });
        console.log('%c' + formattedString, 'color: #c11dd4;font-size:16px');
    }
    isEmpty() {
        return this.state.every(cell => !cell);
    }
    isFull() {
        return this.state.every(cell => cell);
    }
    isTerminal() {
        //senario 1: empty board
        if (this.isEmpty()) return false;

        //senario 2: vertical win
        if (this.state[0] === this.state[3] && this.state[3] === this.state[6]) return {'winner' : this.state[0], 'direction': 'v', 'column': 1};
        if (this.state[1] === this.state[4] && this.state[4] === this.state[7]) return {'winner': this.state[1], 'direction': 'v', 'column': 2};
        if (this.state[2] === this.state[5] && this.state[5] === this.state[8]) return {'winner': this.state[2], 'direction': 'v', 'column': 3};

        //senario 3: horizontal win
        if (this.state[0] === this.state[1] && this.state[1] === this.state[2]) return {'winner': this.state[0], 'direction': 'h', 'row': 1};
        if (this.state[3] === this.state[4] && this.state[4] === this.state[5]) return {'winner': this.state[3], 'direction': 'h', 'row': 2};
        if (this.state[6] === this.state[7] && this.state[7] === this.state[8]) return {'winner': this.state[6], 'direction': 'h', 'row': 3};

        //senario 4: diagonal win
        if (this.state[0] === this.state[4] && this.state[4] === this.state[8]) return {'winner' : this.state[0], 'direction': 'd', 'diagonal': true};
        if (this.state[2] === this.state[4] && this.state[4] === this.state[6]) return {'winner': this.state[2], 'direction': 'd', 'diagonal': true};

        //senario 5: draw
        if (this.isFull) return {'winner': 'draw'};

        //otherwise
        return false;
    }
    insert(symbol, position) {
        if (![0, 1, 2, 3, 4, 5, 6, 7, 8].includes(position)) throw new Error(`Cell ${position} does not exist!`);
        if (!['X', 'O'].includes(symbol)) throw new Error(`Invalid Symbol ${symbol}, The symbol can only be x or o!`);
        if (this.state[position]) return false;
        this.state[position] = symbol;
        return true;
    }
    getAvailableMoves() {
        const moves = [];
        this.state.forEach((cell, index) => {
            if (!cell) moves.push(index);
        })
        return moves;
    }
}