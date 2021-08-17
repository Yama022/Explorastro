import { FORM, SAVE_SORTIE, CHANGE_INPUT } from 'src/actions/exploration';
import data from 'src/data/data.json';

export const initialState = {
  ville: '',
  sortie: data,
  zone: 10,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FORM: {
      return {
        ...state,
        ville: action.payload,
      };
    }
    case SAVE_SORTIE: {
      console.log('ici', action.payload);
      return {
        ...state,
        sortie: action.payload,
      };
    }
    case CHANGE_INPUT: {
      console.log('ici', action.payload);
      return {
        ...state,
        zone: action.payload,
      };
    }
    default:
      return state;
  }
};

export default reducer;
