import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// styles
import "./styles/main.scss";

import { Provider } from 'react-redux'; // Redux Provider
import store from './redux/store/store'; // Redux Store



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <div className='body'>
      <App />
    </div>

  </Provider>,
);

