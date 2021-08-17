export const TOGGLE_DROPDOWN = 'TOGGLE_DROPDOWN';
export const LOGOUT = 'LOGOUT';
export const CHANGE_VALUE = 'CHANGE_VALUE';
export const LOGIN = 'LOGIN';

export const toggleDropdown = () => ({
  type: TOGGLE_DROPDOWN,
});

export const changeValue = (value, key) => ({
  type: CHANGE_VALUE,
  value,
  key,
});

export const login = () => ({
  type: LOGIN,
});

export const logout = () => ({
  type: LOGOUT,
});
