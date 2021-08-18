import axios from 'axios';
import {
  CHANGE_USERNAME,
} from 'src/actions/user';

const settings = (store) => (next) => (action) => {
  switch (action.type) {
    case CHANGE_USERNAME: {
      const sendData = async () => {
        const state = store.getState();
        const user = JSON.parse(localStorage.getItem('user'));
        const userId = user.id;
        try {
          const response = await axios.post({
            method: 'POST',
            baseURL: 'https://explorastro-api.herokuapp.com/',
            url: `api/v1/user/${userId}/update`,
            data: {
              username: state.user.usernameChange,
            },
          });
          console.log(response);
        }
        catch (error) {
          console.log(error);
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
