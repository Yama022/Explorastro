import {
  LOGIN,
  SIGNUP,
  saveUser,
  CHECK_USER_LOGGED,
  toggleSignup,
  loginError,
  FORGOT,
} from 'src/actions/user';

import api from './utils/api';

const auth = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      const state = store.getState();
      const data = {
        login: state.user.email,
        password: state.user.password,
      };
      const login = async () => {
        try {
          const response = await api.post('api/v1/login', data);
          localStorage.setItem('user', JSON.stringify(response.data));
          api.defaults.headers.common.authorization = `Bearer ${response.data.accessToken}`;
          const actionSaveUser = saveUser(response.data);
          store.dispatch(actionSaveUser);
          store.dispatch(loginError(''));
        }
        catch (error) {
          store.dispatch(loginError(error.response.data.message));
        }
      };
      login();
      break;
    }
    case SIGNUP: {
      const state = store.getState();
      const data = {
        firstname: state.user.firstname,
        lastname: state.user.lastname,
        username: state.user.username,
        email: state.user.email,
        password: state.user.password,
        password_confirmation: state.user.passwordConfirmation,
      };
      const signup = async () => {
        try {
          await api.post('api/v1/signup', data);
          store.dispatch(toggleSignup(2));
        }
        catch (error) {
          store.dispatch(loginError(error.response.data.message));
        }
      };
      signup();
      break;
    }
    case FORGOT: {
      const state = store.getState();
      const data = {
        email: state.user.email,
      };
      const forgot = async () => {
        try {
          const response = await api.post('api/v1/password/forgot', data);
          store.dispatch(toggleSignup(2));
          store.dispatch(loginError(response.data.message));
        }
        catch (error) {
          store.dispatch(loginError(error.response.data.message));
        }
      };
      forgot();
      break;
    }
    case CHECK_USER_LOGGED: {
      const user = JSON.parse(localStorage.getItem('user'));
      api.defaults.headers.common.authorization = `BEARER ${user?.accessToken}`;
      const userData = saveUser(user);
      store.dispatch(userData);
      break;
    }
    default:
      next(action);
  }
};

export default auth;
