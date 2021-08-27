import { SAVE_USER } from 'src/actions/user';
import {
  CHANGE_PROFILE_MENU, SAVE_USER_INFO, TOGGLE_FOLLOW, TOGGLE_BIO_EDIT,
} from 'src/actions/profile';

const initialState = {
  loggedUserId: 0,
  username: '',
  firstname: '',
  lastname: '',
  profileMenuValue: 1,
  followers: [],
  following: [],
  explorations: [],
  avatar_url: '',
  userFollowed: false,
  bioEditOpen: false,
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
        explorations: action.payload.organized_explorations,
        avatar_url: action.payload.avatar_url,
        userFollowed: action.payload.followers.some((follow) => follow.id === state.loggedUserId),
      };
    }
    case TOGGLE_FOLLOW: {
      return {
        ...state,
        userFollowed: !state.userFollowed,
      };
    }
    case TOGGLE_BIO_EDIT: {
      return {
        ...state,
        bioEditOpen: !state.bioEditOpen,
      };
    }
    default:
      return state;
  }
};

export default profile;
