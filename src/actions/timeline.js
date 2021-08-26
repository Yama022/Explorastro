// Action types
export const GET_TIMELINE = 'GET_TIMELINE';
export const SAVE_TIMELINE = 'SAVE_TIMELINE';

// Action creators
export const getUserTimeline = () => ({
  type: GET_TIMELINE,
});

export const saveUserTimeline = (payload) => ({
  type: SAVE_TIMELINE,
  payload,
});
