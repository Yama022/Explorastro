import { FORM, saveVille } from 'src/actions/exploration';
import data from 'src/data/data.json';

export const initialState = {
  ville: '',
  sortie: data,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FORM: {
      saveVille(action.payload);
      return {
        ...state,
        ville: action.payload,
      };
    }
    default:
      return state;
  }
};

export default reducer;
