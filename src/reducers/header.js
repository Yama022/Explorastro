import {
  TOGGLE_DROPDOWN,
  TOGGLE_BURGER,
} from 'src/actions/header';

const initialState = {
  dropdownOpen: false,
  burgerOpen: false,
};

const header = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_DROPDOWN: {
      return {
        ...state,
        dropdownOpen: !state.dropdownOpen,
      };
    }
    case TOGGLE_BURGER: {
      return {
        ...state,
        burgerOpen: !state.burgerOpen,
      };
    }
    default:
      return state;
  }
};

export default header;
