

import { History } from 'history';
import { combineReducers } from 'redux';
import {
  connectRouter,
  RouterState,
} from 'connected-react-router';

import { GeneralState, generalDefaultState, generalReducer } from './general';
import { GameState, gameDefaultState, gameReducer } from './game';

export interface IGlobalState {
  general: GeneralState;
  router: RouterState;
  game: GameState;
}

const routerDefaultState: RouterState = {
  location: {
    pathname: '/',
    hash: '',
    search: '',
    state: {},
  },
  action: 'PUSH',
};

export const getDefaultState = (): IGlobalState => ({
  general: generalDefaultState,
  router: routerDefaultState,
  game: gameDefaultState,
});


const createRootReducer = (history: History) => 
  combineReducers({
    router: connectRouter(history),
    general: generalReducer,
    game: gameReducer,
});

export default createRootReducer;

