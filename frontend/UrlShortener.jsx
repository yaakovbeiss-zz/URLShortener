import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from './components/app';

  const Root = ( {store} ) => {
    return (
        <Provider store={store}>
          <HashRouter>
            <App />
          </HashRouter>
        </Provider>
    );
  };

  document.addEventListener('DOMContentLoaded', () => {
    let store = configureStore();
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
  });
