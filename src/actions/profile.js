export const CHANGE_PROFILE_MENU = 'CHANGE_PROFILE_MENU';
export const GET_USER_INFO = 'GET_USER_INFO';
export const SAVE_USER_INFO = 'SAVE_PROFILE_INFO';
export const FOLLOW = 'FOLLOW';
export const UNFOLLOW = 'UNFOLLOW';

export const changeProfileMenu = (payload) => ({
  type: CHANGE_PROFILE_MENU,
  payload,
});

export const getUserInfo = (payload) => ({
  type: GET_USER_INFO,
  payload,
});

export const saveUserInfo = (payload) => ({
  type: SAVE_USER_INFO,
  payload,
});

export const follow = (payload) => ({
  type: FOLLOW,
  payload,
});

export const unfollow = (payload) => ({
  type: UNFOLLOW,
  payload,
});
