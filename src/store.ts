import { createStore, compose, applyMiddleware, Middleware } from 'redux';
import { History } from 'history';
import { logger } from 'redux-logger';

import creatRootReducer, { getDefaultState } from './reducers';

const storeFactory = ({ history }: { history: History }) => {
  const isDevTool: boolean =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

  const composeEnhancers: Function = isDevTool
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ serialize: true })
    : compose;

  const middlewares: Middleware[] = [];

  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(logger);
  }

  const enhancer = composeEnhancers(applyMiddleware(...middlewares));
  const reducersWithRouter = creatRootReducer(history);

  return createStore(reducersWithRouter, getDefaultState(), enhancer);
};

export default storeFactory;
