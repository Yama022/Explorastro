import {
  LOGIN, SIGNUP, saveUser, CHECK_TOKEN, CHECK_USER_LOGGED, toggleSignup,
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
        }
        catch (error) {
          console.error(error.response);
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
          store.dispatch(toggleSignup);
        }
        catch (error) {
          console.error(error.response);
        }
      };
      signup();
      break;
    }
    case CHECK_TOKEN: {
      // on récupère le token stocké dans le localStorage
      const { accessToken } = localStorage.getItem('user');

      // s'il existe on fait notre requête API pour vérifier sa validité
      if (accessToken) {
        // axios.get('/token', {
        //   // on oublie pas d'embarquer le token avec la requête
        //   headers: {
        //     authorization: `Bearer ${accessToken}`,
        //   },
        // })
        //   .then((response) => {
        //     // ici le token est bon, donc on peut le stocker dans l'insance
        //     axios.defaults.headers.common.authorization = `Bearer ${accessToken}`;

        //     // en cas de réponse on sauvegarde le user dans le state
        //     // avec la même action que pour le login
        //     const payload = { ...response.data };
        //     const actionSaveUser = saveUser(payload);
        //     store.dispatch(actionSaveUser);aniser une sortie
        //   })
        //   .catch((error) => console.log(error));
      }
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
