import { combineReducers } from 'redux';

import explorationReducer from './exploration';
import userReducer from './user';
import headerReducer from './header';

const rootReducer = combineReducers({
  exploration: explorationReducer,
  user: userReducer,
  header: headerReducer,
});

export default rootReducer;
