import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux'
import store from './store';
import { storeContext } from './hoc'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <storeContext.Provider value={store} >
      <App />
    </storeContext.Provider>
  </Provider>
);

