import { CHANGE_VALUE_MODAL_RGPD } from 'src/actions/RGPD';

const initialState = {
  modal: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_VALUE_MODAL_RGPD: {
      return {
        ...state,
        modal: true,
      };
    }
    default:
      return state;
  }
};

export default reducer;
