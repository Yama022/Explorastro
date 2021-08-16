import {
  CHANGE_VALUE, TOGGLE_DROPDOWN, LOGOUT, LOGIN,
} from 'src/actions/user';

const initialState = {
  email: '',
  password: '',
  username: 'AstroCharles',
  logged: true,
  open: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_VALUE: {
      return {
        ...state,
        [action.key]: action.value,
      };
    }
    case TOGGLE_DROPDOWN: {
      return {
        ...state,
        open: !state.open,
      };
    }
    case LOGOUT: {
      return {
        // Déconnexion temporaire ci-dessous.
        // Prendre la dernière ligne quand la connexion fonctionne
        ...state,
        logged: false,
        // ...initialState,  <-- Remettre cette ligne lorsque les connexions fonctionnent
      };
    }
    case LOGIN: {
      return {
        ...state,
        logged: true,
      };
    }
    default:
      return state;
  }
};

export default reducer;
