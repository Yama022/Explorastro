import { FORM, SAVE_SORTIE } from 'src/actions/exploration';
import data from 'src/data/data.json';

export const initialState = {
  ville: '',
  sortie: data,
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
    default:
      return state;
  }
};

export default reducer;
