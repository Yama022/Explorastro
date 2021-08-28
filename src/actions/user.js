export const TOGGLE_SIGNUP = 'TOGGLE_SIGNUP';
export const CHANGE_VALUE = 'CHANGE_VALUE';
export const SIGNUP = 'SIGNUP';
export const LOGIN = 'LOGIN';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGOUT = 'LOGOUT';
export const SAVE_USER = 'SAVE_USER';
export const CHECK_TOKEN = 'CHECK_TOKEN';
export const CHECK_USER_LOGGED = 'CHECK_USER_LOGGED';
export const CHANGE_USERNAME = 'CHANGE_USERNAME';
export const CHANGE_PASSWORD = 'CHANGE_PASSWORD';
export const DELETE_ACCOUNT = 'DELETE_ACCOUNT';
export const SET_FIELD_HAS_ERROR = 'SET_FIELD_HAS_ERROR';

export const toggleSignup = () => ({
  type: TOGGLE_SIGNUP,
});

export const changeValue = (value, key) => ({
  type: CHANGE_VALUE,
  value,
  key,
});

export const signup = () => ({
  type: SIGNUP,
});

export const login = () => ({
  type: LOGIN,
});

export const loginError = () => ({
  type: LOGIN_ERROR,
});

export const logout = () => ({
  type: LOGOUT,
});

export const saveUser = (payload) => ({
  type: SAVE_USER,
  payload,
});

export const checkUserLogged = () => ({
  type: CHECK_USER_LOGGED,
});

export const changeUsername = () => ({
  type: CHANGE_USERNAME,
});

export const changePassword = () => ({
  type: CHANGE_PASSWORD,
});

export const deleteAccount = () => ({
  type: DELETE_ACCOUNT,
});

export const setFieldHasError = (value) => ({
  type: SET_FIELD_HAS_ERROR,
  value,
});
