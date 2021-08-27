import { createStore, applyMiddleware, compose } from 'redux';
// import api from 'src/middlewares/api';

import reducer from 'src/reducers';
import auth from 'src/middlewares/auth';
import event from 'src/middlewares/event';
import settings from 'src/middlewares/settings';
import profile from 'src/middlewares/profile';
import timeline from 'src/middlewares/timeline';

// Redux Devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Warning declare here middleware !!!
const enhancers = composeEnhancers(
  applyMiddleware(auth, event, settings, profile, timeline),
);

const store = createStore(reducer, enhancers);

export default store;
