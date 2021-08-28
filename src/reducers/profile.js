import { SAVE_USER } from 'src/actions/user';
import {
  CHANGE_PROFILE_MENU, SAVE_USER_INFO, TOGGLE_FOLLOW, TOGGLE_BIO_EDIT, CHANGE_INPUT_VALUE, SAVE_BIO,
} from 'src/actions/profile';

const initialState = {
  loggedUserId: 0,
  avatar_url: '',
  username: '',
  firstname: '',
  lastname: '',
  biography: '',
  biographyEdit: '',
  profileMenuValue: 1,
  followers: [],
  following: [],
  explorations: [],
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
        biography: action.payload.bio,
        biographyEdit: action.payload.bio,
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
    case CHANGE_INPUT_VALUE: {
      return {
        ...state,
        [action.key]: action.value,
      };
    }
    case SAVE_BIO: {
      console.log(action.payload);
      return {
        ...state,
        biography: action.payload,
      };
    }
    default:
      return state;
  }
};

export default profile;
