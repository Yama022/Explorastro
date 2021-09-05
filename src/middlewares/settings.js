import {
  CHANGE_USERNAME,
  CHANGE_PASSWORD,
  DELETE_ACCOUNT,
  logout,
  saveUser,
  loginError,
  CHANGE_SOCIALS,
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
          store.dispatch(loginError([error.response.config.url, error.response.data.message]));
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
          store.dispatch(logout());
        }
        catch (error) {
          store.dispatch(loginError([error.response.config.url, error.response.data.message]));
        }
      };
      sendData();
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
          store.dispatch(logout());
        }
        catch (error) {
          store.dispatch(loginError([error.response.config.url, error.response.data.message]));
        }
      };
      sendData();
      break;
    }
    case CHANGE_SOCIALS: {
      const sendData = async () => {
        const state = store.getState();
        const user = JSON.parse(localStorage.getItem('user'));
        const userId = user.id;

        const data = {
          twitter: state.user.newTwitter,
          instagram: state.user.newInstagram,
          facebook: state.user.newFacebook,
          tiktok: state.user.newTiktok,
          astrobin: state.user.newAstrobin,
        };

        try {
          await api.patch(`api/v1/user/${userId}/update/`, data);
          store.dispatch(loginError([['Socials updated']]));
        }
        catch (error) {
          store.dispatch(loginError([error.response.config.url, error.response.data.message]));
        }
      };
      sendData();
      break;
    }
    default:
      next(action);
  }
};

export default settings;
