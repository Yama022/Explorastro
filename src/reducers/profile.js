import { CHANGE_PROFILE_MENU, SAVE_USER_INFO } from 'src/actions/profile';

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
    case SAVE_USER_INFO: {
      return {
        ...state,
        username: action.payload.username,
        firstname: action.payload.firstname,
        lastname: action.payload.lastname,
      };
    }
    default:
      return state;
  }
};

export default profile;
