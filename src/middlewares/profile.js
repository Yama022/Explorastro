import {
  GET_USER_INFO, saveUserInfo, FOLLOW, UNFOLLOW,
} from 'src/actions/profile';

import api from './utils/api';

const profile = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_USER_INFO: {
      const getInfo = async () => {
        try {
          const response = await api.get(`/api/v1/user/${action.payload}`);
          const actionSaveUserInfo = saveUserInfo(response.data);
          store.dispatch(actionSaveUserInfo);
        }
        catch (error) {
          console.error(error.response);
        }
      };
      getInfo();
      break;
    }
    case FOLLOW: {
      const state = store.getState();
      const handleFollow = async () => {
        try {
          const response = await api.post(`/api/v1/user/${state.user.loggedUserId}/follow/${action.payload}`);
          console.log(response);
        }
        catch (error) {
          console.error(error.response);
        }
      };
      handleFollow();
      break;
    }
    case UNFOLLOW: {
      const state = store.getState();
      const handleUnfollow = async () => {
        try {
          const response = await api.delete(`/api/v1/user/${state.user.loggedUserId}/unfollow/${action.payload}`);
          console.log(response);
        }
        catch (error) {
          console.error(error.response);
        }
      };
      handleUnfollow();
      break;
    }
    default:
      next(action);
  }
};

export default profile;
