import {
  CHANGE_USERNAME, CHANGE_PASSWORD, logout, DELETE_ACCOUNT, saveUser,
} from 'src/actions/user';
import api from './utils/api';

const settings = (store) => (next) => (action) => {
  switch (action.type) {
    case CHANGE_USERNAME: {
      const sendData = async () => {
        const state = store.getState();
        const user = JSON.parse(localStorage.getItem('user'));
        const userId = user.id;
        try {
          await api.patch(`api/v1/user/${userId}/update/username`, {
            id: userId,
            username: state.user.usernameChange,
            password: state.user.passwordForUsername,
          });
          const actionSaveUser = saveUser(state.user.usernameChange);
          store.dispatch(actionSaveUser);
        }
        catch (error) {
          console.log(error);
        }
      };
      sendData();
      break;
    }
    case CHANGE_PASSWORD: {
      const sendData = async () => {
        const state = store.getState();
        const user = JSON.parse(localStorage.getItem('user'));
        const userId = user.id;
        try {
          await api.patch(`api/v1/user/${userId}/update/password`, {
            old_password: state.user.password,
            new_password: state.user.newPassword,
          });
        }
        catch (error) {
          console.log(error.response);
        }
      };
      sendData();
      store.dispatch(logout());
      break;
    }
    case DELETE_ACCOUNT: {
      const sendData = async () => {
        const state = store.getState();
        const user = JSON.parse(localStorage.getItem('user'));
        const userId = user.id;
        try {
          await api.delete(`api/v1/user/${userId}/delete`, {
            data: {
              password: state.user.passwordConfirmation,
            },
          });
        }
        catch (error) {
          console.log(error.response);
        }
      };
      sendData();
      store.dispatch(logout());
      break;
    }
    default:
      next(action);
  }
};

export default settings;
