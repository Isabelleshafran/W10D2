import React from 'react'
import Tile from './tile'
import * as Minesweeper from '/frontend/minesweeper.js';


class Board extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        
        const tile = this.props.board.grid.map((row, idx1) => {
            return row.map((tile, idx2) => {
                // new Minesweeper.Tile(tile, this.props.board.game)
                return <Tile key={idx2} tile={tile} updated={this.props.game}/>
            })
        })

        // console.log('hello')
        return (
            <div className="board"> 
                {tile}
            </div>
        )
    }
}



export default Board;