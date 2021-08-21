import { SAVE_USER } from 'src/actions/user';
import { CHANGE_PROFILE_MENU } from 'src/actions/profile';

const initialState = {
  loggedUserId: 0,
  username: '',
  firstname: '',
  lastname: '',
  profileMenuValue: 1,
};

const profile = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_PROFILE_MENU: {
      return {
        ...state,
        profileMenuValue: Number(action.payload),
      };
    }
    case SAVE_USER: {
      return {
        ...state,
        loggedUserId: action.payload?.id ?? '',
        username: action.payload?.username ?? '',
        firstname: action.payload?.firstname ?? '',
        lastname: action.payload?.lastname ?? '',
      };
    }
    default:
      return state;
  }
};

export default profile;
