import { TOGGLE_DROPDOWN, LOGOUT } from 'src/actions/user';

const initialState = {
  email: 'admin@explorastro.com',
  password: 'astrocharles',
  username: 'AstroCharles',
  logged: true,
  open: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
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
    default:
      return state;
  }
};

export default reducer;
