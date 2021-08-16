import { combineReducers } from 'redux';

import explorationReducer from './exploration';
import userReducer from './user';

const rootReducer = combineReducers({
  exploration: explorationReducer,
  user: userReducer,
});

export default rootReducer;
