import { combineReducers } from 'redux';

import explorationReducer from './exploration';
import userReducer from './user';
import headerReducer from './header';
import profileReducer from './profile';

const rootReducer = combineReducers({
  exploration: explorationReducer,
  user: userReducer,
  header: headerReducer,
  profile: profileReducer,
});

export default rootReducer;
