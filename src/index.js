import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './reducers';

// outils du developpeurs
import { composeWithDevTools } from 'redux-devtools-extension';


const store = createStore(
  rootReducer, composeWithDevTools(applyMiddleware(thunk))
)

ReactDOM.render(
 <Provider store={store}>
   <App />
 </Provider>,
  document.getElementById('root')
);


