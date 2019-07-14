import { Action } from 'redux';

import { boardGame } from '../fixtures/board.fixtures';
import { BoardGame } from '../entities/BoardGame';

export interface GameState {
  board: BoardGame;
}

export const gameDefaultState: GameState = {
  board: boardGame,
};

export const gameReducer = (
  state: GameState = gameDefaultState,
  action: Action
): GameState => {
  switch (action.type) {
    default:
      return state;
  }
};
