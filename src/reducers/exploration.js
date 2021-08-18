import {
  FORM, SAVE_EXPLORATION, CHANGE_INPUT, CHANGE_INPUT_CREATE_EVENT,
} from 'src/actions/exploration';
import data from 'src/data/data.json';

export const initialState = {
  ville: '',
  sortie: data,
  zone: 10,
  titleEvent: '',
  descEvent: '',
  locationEvent: '',
  dateEvent: '',
  maxRateEvent: 0,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FORM: {
      return {
        ...state,
        ville: action.payload,
      };
    }
    case SAVE_EXPLORATION: {
      return {
        ...state,
        sortie: action.payload,
      };
    }
    case CHANGE_INPUT: {
      return {
        ...state,
        zone: action.payload,
      };
    }
    case CHANGE_INPUT_CREATE_EVENT: {
      return {
        ...state,
        [action.key]: action.value,
      };
    }
    default:
      return state;
  }
};

export default reducer;
