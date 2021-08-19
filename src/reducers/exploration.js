import {
  FORM, SAVE_EXPLORATION, CHANGE_INPUT, CHANGE_INPUT_CREATE_EVENT, GET_COORD, SAVE_EVENT_CREATED,
} from 'src/actions/exploration';
import data from 'src/data/data.json';

export const initialState = {
  ville: '',
  sortie: data,
  zone: 10,
  titleEvent: '',
  descEvent: '',
  street: '',
  city: '',
  postalCode: 0,
  dateEvent: '',
  maxRateEvent: 0,
  coord: '',
  eventCreated: [],
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
    case GET_COORD: {
      return {
        ...state,
        coord: action.value,
      };
    }
    case CHANGE_INPUT_CREATE_EVENT: {
      return {
        ...state,
        [action.key]: action.value,

      };
    }
    case SAVE_EVENT_CREATED: {
      const events = action.value.organized_explorations.map((element) => (element));
      return {
        ...state,
        eventCreated: events,

      };
    }
    default:
      return state;
  }
};

export default reducer;
