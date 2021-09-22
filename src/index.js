import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import { store } from './state/store'
import { Provider } from 'react-redux'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);