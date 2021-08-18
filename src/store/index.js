import { createStore, applyMiddleware, compose } from 'redux';
// import api from 'src/middlewares/api';

import reducer from 'src/reducers';

import auth from 'src/middlewares/auth';
import event from 'src/middlewares/event';

// Redux Devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Warning declare here middleware !!!
const enhancers = composeEnhancers(
  applyMiddleware(auth, event),
);

const store = createStore(reducer, enhancers);

export default store;
