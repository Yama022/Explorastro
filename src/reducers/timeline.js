import { SAVE_TIMELINE, CHANGE_VALUE_TIMELINE, SAVE_PEOPLE } from 'src/actions/timeline';
import { SAVE_USER_INFO } from 'src/actions/profile';

export const initialState = {
  timelineContent: [],
  following: [],
  searchInput: '',
  searchResult: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_TIMELINE: {
      return {
        ...state,
        timelineContent: [...action.payload],
      };
    }
    case SAVE_USER_INFO: {
      return {
        ...state,
        following: action.payload.following,
      };
    }
    case CHANGE_VALUE_TIMELINE: {
      return {
        ...state,
        [action.key]: action.value,
      };
    }
    case SAVE_PEOPLE: {
      return {
        ...state,
        searchResult: action.value,
      };
    }
    default:
      return state;
  }
};

export default reducer;
