import axios from 'axios';
import { LOGIN, saveUser } from 'src/actions/user';

const auth = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      const state = store.getState();
      axios({
        method: 'POST',
        baseURL: 'http://localhost:3000/',
        url: 'api/v1/login',
        data: {
          login: state.user.email,
          password: state.user.password,
        },
      }).then((response) => {
        const actionSaveUser = saveUser(response.data);
        store.dispatch(actionSaveUser);
      })
        .catch((error) => console.error(error.response));
      break;
    }
    default:
      next(action);
  }
};

export default auth;
