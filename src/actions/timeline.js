// Action types
export const GET_TIMELINE = 'GET_TIMELINE';
export const SAVE_TIMELINE = 'SAVE_TIMELINE';
export const SEARCH_PEOPLE = 'SEARCH_PEOPLE';
export const SAVE_PEOPLE = 'SAVE_PEOPLE';
export const CHANGE_VALUE_TIMELINE = 'CHANGE_VALUE_TIMELINE';

// Action creators
export const getUserTimeline = () => ({
  type: GET_TIMELINE,
});

export const saveUserTimeline = (payload) => ({
  type: SAVE_TIMELINE,
  payload,
});

export const changeValueTimeline = (value, key) => ({
  type: CHANGE_VALUE_TIMELINE,
  value,
  key,
});

export const searchPeople = () => ({
  type: SEARCH_PEOPLE,
});

export const savePeople = (value) => ({
  type: SAVE_PEOPLE,
  value,
});
