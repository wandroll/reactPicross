/* tslint:disable jsx-no-lambda */
import { History } from 'history';
import React, { Fragment } from 'react';
import {
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import routes from '../routes';
import { ConnectedRouter } from 'connected-react-router';

import NewGameViewContainer from './new/NewGameViewContainer';

interface Props {
  history: History;
}

const Root = ({ history }: Props) => (
  <ConnectedRouter history={history}>
    <Fragment>
      <Switch>
        <Route
          path={routes.newGame()}
          render={() => <NewGameViewContainer/>}
        />
        <Redirect from={routes.root()} to={routes.newGame()} />
      </Switch>
    </Fragment>
  </ConnectedRouter>
);

export default Root;