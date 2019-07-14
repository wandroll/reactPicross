import { IGlobalState } from '../reducers'
import { BoardGame } from '../entities/BoardGame';

export const getBob = (state: IGlobalState): boolean => state.general.bob;
export const getBoardGame = (state: IGlobalState): BoardGame => state.game.board;