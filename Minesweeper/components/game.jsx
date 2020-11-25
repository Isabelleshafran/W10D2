import React from 'react';
import * as Minesweeper from '/frontend/minesweeper.js';
import Board from './board';


class Game extends React.Component {

    constructor(props) {
        super(props); 

        this.state = {
            board: new Minesweeper.Board(10, 4)
        }

        this.updateGame = this.updateGame.bind(this); 
    }

    updateGame() {

    }

    render () {
        return (
            <Board board={this.state.board} game={this.updateGame}/>
        )
    }
}


export default Game;