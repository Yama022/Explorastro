import { SAVE_TIMELINE } from 'src/actions/timeline';
import { SAVE_USER_INFO } from 'src/actions/profile';

// les valeurs par défaut sont stockées dans le state initial
export const initialState = {
  timelineContent: [],
  following: [],
};

// fonction qui traduit une intention/action en changement de state
// mission principale => RETOURNE TOUJOURS UN STATE
const reducer = (state = initialState, action = {}) => {
// en fonction de la propriété type de l'action
// on va retourner un state changer ou pas
  switch (action.type) {
    case SAVE_TIMELINE: {
      return {
        ...state,
        timelineContent: [...action.payload],
      };
    }
    case SAVE_USER_INFO: {
      return {
        ...state,
        following: action.payload.following,
      };
    }
    default:
      return state;
  }
};

export default reducer;
