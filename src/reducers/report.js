import { ON_REPORT_CHANGE_VALUE, GET_INITIAL_STATE, TOGGLE_REPORT_MODAL } from 'src/actions/report';

const initialState = {
  content: '',
  object: '',
  reportModalIsOpen: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ON_REPORT_CHANGE_VALUE: {
      return {
        ...state,
        [action.key]: action.value,
      };
    }
    case GET_INITIAL_STATE: {
      return {
        ...state,
        ...initialState,
      };
    }
    case TOGGLE_REPORT_MODAL: {
      return {
        ...state,
        reportModalIsOpen: !state.reportModalIsOpen,
        content: '',
        oject: '',
      };
    }
    default:
      return state;
  }
};

export default reducer;
