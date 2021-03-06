import { createStore, applyMiddleware, compose } from 'redux';
// import api from 'src/middlewares/api';

import reducer from 'src/reducers';
import auth from 'src/middlewares/auth';
import event from 'src/middlewares/event';
import settings from 'src/middlewares/settings';
import profile from 'src/middlewares/profile';
import exploration from 'src/middlewares/exploration';
import timeline from 'src/middlewares/timeline';
import discover from 'src/middlewares/discover';
import report from 'src/middlewares/report';
import RGPD from 'src/middlewares/RGPD';

// Redux Devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Warning declare here middleware !!!
const enhancers = composeEnhancers(
  applyMiddleware(auth, event, exploration, settings, profile, timeline, discover, report, RGPD),
);

const store = createStore(reducer, enhancers);

export default store;
