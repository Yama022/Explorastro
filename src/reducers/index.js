import { combineReducers } from 'redux';

import explorationReducer from './exploration';
import userReducer from './user';
import headerReducer from './header';
import profileReducer from './profile';
import timelineReducer from './timeline';

const rootReducer = combineReducers({
  exploration: explorationReducer,
  user: userReducer,
  header: headerReducer,
  profile: profileReducer,
  timeline: timelineReducer,
});

export default rootReducer;
