import { SAVE_USER } from 'src/actions/user';
import { CHANGE_PROFILE_MENU, SAVE_USER_INFO, TOGGLE_FOLLOW } from 'src/actions/profile';

const initialState = {
  loggedUserId: 0,
  username: '',
  firstname: '',
  lastname: '',
  profileMenuValue: 1,
  followers: [],
  following: [],
  userFollowed: false,
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
        loggedUserId: action.payload?.id,
      };
    }
    case SAVE_USER_INFO: {
      return {
        ...state,
        username: action.payload.username,
        firstname: action.payload.firstname,
        lastname: action.payload.lastname,
        followers: action.payload.followers,
        following: action.payload.following,
        userFollowed: action.payload.followers.some((follow) => follow.id === state.loggedUserId),
      };
    }
    case TOGGLE_FOLLOW: {
      return {
        ...state,
        userFollowed: !state.userFollowed,
      };
    }
    default:
      return state;
  }
};

export default profile;
