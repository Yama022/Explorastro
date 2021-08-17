import {
  CHANGE_VALUE, TOGGLE_DROPDOWN, LOGOUT, SAVE_USER,
} from 'src/actions/user';

const initialState = {
  email: 'admin@explorastro.fr',
  password: 'exploradmin',
  username: '',
  logged: false,
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
    case SAVE_USER: {
      return {
        ...state,
        username: action.payload.username,
        logged: true,
        email: '',
        password: '',
      };
    }
    case LOGOUT: {
      return {
        ...initialState,
      };
    }
    default:
      return state;
  }
};

export default reducer;
