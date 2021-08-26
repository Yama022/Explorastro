import {

} from 'src/actions/user';
import api from './utils/api';

const exploration = (store) => (next) => (action) => {
  switch (action.type) {
    // case LOGIN: {
    //   const state = store.getState();
    //   const data = {
    //     login: state.user.email,
    //     password: state.user.password,
    //   };
    //   const login = async () => {
    //     try {
    //       const response = await api.post('api/v1/login', data);
    //       localStorage.setItem('user', JSON.stringify(response.data));
    //       api.defaults.headers.common.authorization = `Bearer ${response.data.accessToken}`;
    //       const actionSaveUser = saveUser(response.data);
    //       store.dispatch(actionSaveUser);
    //     }
    //     catch (error) {
    //       console.error(error.response);
    //     }
    //   };
    //   login();
    //   break;
    // }

    default:
      next(action);
  }
};

export default exploration;
