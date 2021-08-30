import {
  GET_USER_INFO,
  saveUserInfo,
  FOLLOW,
  UNFOLLOW,
  toggleFollow,
  CHANGE_BIO,
  saveBio,
  userExists,
  UPLOAD_AVATAR,
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
          store.dispatch(userExists(true));
        }
        catch (error) {
          store.dispatch(userExists(false));
        }
      };
      getInfo();
      break;
    }
    case FOLLOW: {
      const state = store.getState();
      const handleFollow = async () => {
        try {
          await api.post(`/api/v1/user/${state.user.loggedUserId}/follow/${action.payload}`);
          store.dispatch(toggleFollow());
        }
        catch (error) {
          // eslint-disable-next-line no-console
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
          await api.delete(`/api/v1/user/${state.user.loggedUserId}/unfollow/${action.payload}`);
          store.dispatch(toggleFollow());
        }
        catch (error) {
          // eslint-disable-next-line no-console
          console.error(error.response);
        }
      };
      handleUnfollow();
      break;
    }
    case CHANGE_BIO: {
      const state = store.getState();
      const data = {
        bio: state.profile.biographyEdit,
      };
      const handleChangeBio = async () => {
        try {
          const response = await api.patch(`/api/v1/user/${state.user.loggedUserId}/update`, data);
          const actionSaveBio = saveBio(response.data.user.bio);
          store.dispatch(actionSaveBio);
        }
        catch (error) {
          // eslint-disable-next-line no-console
          console.error(error.response);
        }
      };
      handleChangeBio();
      break;
    }
    case UPLOAD_AVATAR: {
      const state = store.getState();

      const formData = new FormData();

      formData.append('avatar',
        state.profile.avatarFile,
        state.profile.avatarFile.name);

      const handleUploadAvatar = async () => {
        try {
          // eslint-disable-next-line no-unused-vars
          const response = await api.put(`/api/v1/user/${state.user.loggedUserId}/update/avatar`, {
            data: '[formData]',
          });
          // console.log(response);
          // const actionSaveBio = saveBio(response.data.user.bio);
          // store.dispatch(actionSaveBio);
        }
        catch (error) {
          // eslint-disable-next-line no-console
          console.error(error.response);
        }
      };
      handleUploadAvatar();
      break;
    }
    default:
      next(action);
  }
};

export default profile;
