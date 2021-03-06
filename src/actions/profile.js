export const CHANGE_PROFILE_MENU = 'CHANGE_PROFILE_MENU';
export const GET_USER_INFO = 'GET_USER_INFO';
export const SAVE_USER_INFO = 'SAVE_USER_INFO';
export const FOLLOW = 'FOLLOW';
export const UNFOLLOW = 'UNFOLLOW';
export const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW';
export const TOGGLE_BIO_EDIT = 'TOGGLE_BIO_EDIT';
export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
export const CHANGE_BIO = 'CHANGE_BIO';
export const SAVE_BIO = 'SAVE_BIO';
export const USER_EXISTS = 'USER_EXISTS';
export const UPLOAD_AVATAR = 'UPLOAD_AVATAR';
export const SAVE_AVATAR = 'SAVE_AVATAR';
export const SET_FIELD_HAS_ERROR = 'SET_FIELD_HAS_ERROR';
export const SET_LOADING = 'SET_LOADING';

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

export const toggleFollow = () => ({
  type: TOGGLE_FOLLOW,
});

export const toggleBioEdit = () => ({
  type: TOGGLE_BIO_EDIT,
});

export const changeInputValue = (value, key) => ({
  type: CHANGE_INPUT_VALUE,
  value,
  key,
});

export const changeBio = () => ({
  type: CHANGE_BIO,
});

export const saveBio = (payload) => ({
  type: SAVE_BIO,
  payload,
});

export const userExists = (value) => ({
  type: USER_EXISTS,
  value,
});

export const uploadAvatar = (value) => ({
  type: UPLOAD_AVATAR,
  value,
});

export const saveAvatar = (payload) => ({
  type: SAVE_AVATAR,
  payload,
});

export const setFieldHasError = (value) => ({
  type: SET_FIELD_HAS_ERROR,
  value,
});

export const setLoading = () => ({
  type: SET_LOADING,
});
