import { GET_USER_INFO, saveUserInfo } from 'src/actions/profile';

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
    default:
      next(action);
  }
};

export default profile;
