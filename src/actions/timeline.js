// Action types
export const GET_TIMELINE = 'GET_TIMELINE';
export const SAVE_TIMELINE = 'SAVE_TIMELINE';
export const SEARCH_SOMEONE = 'SEARCH_SOMEONE';

// Action creators
export const getUserTimeline = () => ({
  type: GET_TIMELINE,
});

export const saveUserTimeline = (payload) => ({
  type: SAVE_TIMELINE,
  payload,
});

export const searchSomeone = () => ({
  type: SEARCH_SOMEONE,
});
