import { TOGGLE_DROPDOWN } from 'src/actions/user';

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
    default:
      return state;
  }
};

export default reducer;
