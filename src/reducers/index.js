import { combineReducers } from 'redux';

import explorationReducer from './exploration';
import userReducer from './user';
import headerReducer from './header';
import profileReducer from './profile';
import timelineReducer from './timeline';
import reportReducer from './report';
import RGPDReducer from './RGPD';

const rootReducer = combineReducers({
  exploration: explorationReducer,
  user: userReducer,
  header: headerReducer,
  profile: profileReducer,
  timeline: timelineReducer,
  report: reportReducer,
  RGPD: RGPDReducer,
});

export default rootReducer;
