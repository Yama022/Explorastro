import { createStore, applyMiddleware, compose } from 'redux';
// import api from 'src/middlewares/api';

import reducer from 'src/reducers';

// Redux Devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Warning declare here middleware !!!
const enhancers = composeEnhancers(
  applyMiddleware(),
);

const store = createStore(reducer, enhancers);

export default store;
