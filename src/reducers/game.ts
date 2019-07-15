import { boardGame } from '../fixtures/board.fixtures';
import { BoardGame, CellStatusEnum } from '../entities/BoardGame';
import { Actions as GameActions } from '../actionCreators/game';
import { TOGGLE_FILL_CELL } from '../actionTypes';
import { replaceAt2D } from '../services/immutableHelper';

export interface GameState {
  board: BoardGame;
}

export const gameDefaultState: GameState = {
  board: boardGame,
};

export const toggleFillCell = (state: GameState, rowIndex: number, itemIndex: number ): GameState => ({
  ...state,
  board: {
    ...state.board,
    cells: replaceAt2D(state.board.cells, rowIndex, itemIndex, {
      ...state.board.cells[rowIndex][itemIndex],
      status: state.board.cells[rowIndex][itemIndex].status === CellStatusEnum.FILLED ? CellStatusEnum.BLANK : CellStatusEnum.FILLED,
    }),
  }
})

export const gameReducer = (
  state: GameState = gameDefaultState,
  action: GameActions,
): GameState => {
  switch (action.type) {
    case TOGGLE_FILL_CELL:
      return toggleFillCell(state, action.payload.rowIndex, action.payload.itemIndex);
    default:
      return state;
  }
};
