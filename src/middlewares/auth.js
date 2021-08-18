import axios from 'axios';
import {
  LOGIN, SIGNUP, saveUser, CHECK_TOKEN, CHECK_USER_LOGGED,
} from 'src/actions/user';

const auth = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      const state = store.getState();
      axios({
        method: 'POST',
        baseURL: 'https://explorastro-api.herokuapp.com/',
        url: 'api/v1/login',
        data: {
          login: state.user.email,
          password: state.user.password,
        },
      }).then((response) => {
        localStorage.setItem('user', JSON.stringify(response.data));
        const actionSaveUser = saveUser(response.data);
        store.dispatch(actionSaveUser);
      })
        .catch((error) => console.error(error.response));
      break;
    }
    case SIGNUP: {
      const state = store.getState();
      axios({
        method: 'POST',
        baseURL: 'https://explorastro-api.herokuapp.com/',
        url: 'api/v1/signup',
        data: {
          firstname: state.user.firstname,
          lastname: state.user.lastname,
          username: state.user.username,
          email: state.user.email,
          password: state.user.password,
          password_confirmation: state.user.passwordConfirmation,
        },
      }).then((response) => {
        const actionSaveUser = saveUser(response.data.user);
        store.dispatch(actionSaveUser);
      })
        .catch((error) => console.error(error.response));
      break;
    }
    case CHECK_TOKEN: {
      // on récupère le token stocké dans le localStorage
      const token = localStorage.getItem('token');

      // s'il existe on fait notre requête API pour vérifier sa validité
      if (token) {
        axios.get('/token', {
          // on oublie pas d'embarquer le token avec la requête
          headers: {
            authorization: `Bearer ${token}`,
          },
        })
          .then((response) => {
            // ici le token est bon, donc on peut le stocker dans l'insance
            axios.defaults.headers.common.authorization = `Bearer ${token}`;

            // en cas de réponse on sauvegarde le user dans le state
            // avec la même action que pour le login
            const payload = { ...response.data };
            const actionSaveUser = saveUser(payload);
            store.dispatch(actionSaveUser);
          })
          .catch((error) => console.log(error));
      }
      break;
    }
    case CHECK_USER_LOGGED: {
      const user = JSON.parse(localStorage.getItem('user'));
      const userData = saveUser(user);
      store.dispatch(userData);
      break;
    }
    default:
      next(action);
  }
};

export default auth;
