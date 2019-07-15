import React from 'react';
import { BoardGame } from '../../entities/BoardGame';
import { Board } from '../../components';

export interface NewGameProps {
  boardGame: BoardGame;
  toggleCell: (i: number, j: number) => void;
}

const NewGameView = ({ boardGame, toggleCell }: NewGameProps) => (
  <Board boardGame={boardGame} toggleCell={toggleCell}/>
);

export default NewGameView;
