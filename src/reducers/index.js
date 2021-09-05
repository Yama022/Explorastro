import { combineReducers } from 'redux';

import explorationReducer from './exploration';
import userReducer from './user';
import headerReducer from './header';
import profileReducer from './profile';
import timelineReducer from './timeline';
import reportReducer from './report';

const rootReducer = combineReducers({
  exploration: explorationReducer,
  user: userReducer,
  header: headerReducer,
  profile: profileReducer,
  timeline: timelineReducer,
  report: reportReducer,
});

export default rootReducer;
