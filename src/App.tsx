import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Root from './views/Root';
import storeFactory from './store';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory({ basename: '/' });
const store = storeFactory({ history });

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Root history={history} />
    </Provider>
  );
};

export default App;
