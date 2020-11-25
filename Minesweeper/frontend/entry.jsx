import React from 'react';
import ReactDOM from 'react-dom';
import * as Minesweeper from './minesweeper.js';
import Game from '/components/game.jsx';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    ReactDOM.render(<Game />, root)
})