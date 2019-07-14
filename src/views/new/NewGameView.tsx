

import React from 'react';
import { BoardGame } from '../../entities/BoardGame';
import { Board } from '../../components';

export interface NewGameProps {
    boardGame: BoardGame;
}

const NewGameView = ({ boardGame } : NewGameProps)  => (
    <Board
    boardGame={boardGame}
    />
);

export default NewGameView;