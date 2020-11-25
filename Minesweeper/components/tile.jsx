import React from 'react';
import * as Minesweeper from '/frontend/minesweeper.js';

class Tile extends React.Component {
    constructor(props){
        super(props)
    }

    handleClick(tile){
        this.setState({tile}, this.props.updated)
    }


    render(){
        let check;
        const {tile} = this.props
        let className = "tile"
        if(tile.explored === true) {
            
            if (tile.bombed){
                check = '💣'
                className="tile bombed"
            } else {
                check = tile.adjacentBombCount() 
                className="tile explored"
            }

        } else if(tile.flagged){
            check = '🚩'
            className="tile flagged"
        }

        // console.log('hello')
  
        return (

            <div className={className}>{check}</div>
           
        )
    }
}

export default Tile;