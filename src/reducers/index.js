import { combineReducers } from 'redux';

import explorationReducer from './exploration';

const rootReducer = combineReducers({
  exploration: explorationReducer,

});

export default rootReducer;
