import { SAVE_USER } from 'src/actions/user';
import {
  CHANGE_PROFILE_MENU,
  SAVE_USER_INFO,
  TOGGLE_FOLLOW,
  TOGGLE_BIO_EDIT,
  CHANGE_INPUT_VALUE,
  SAVE_BIO,
  USER_EXISTS,
  SAVE_AVATAR,
} from 'src/actions/profile';

const initialState = {
  loggedUserId: 0,
  role_id: 0,
  avatarFile: null,
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
  participatesTo: [],
  userFollowed: false,
  bioEditOpen: false,
  userFound: false,
  isLoading: true,
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
        participatesTo: action.payload.explorations,
        biography: action.payload.bio,
        biographyEdit: action.payload.bio,
        avatar_url: action.payload.avatar_url,
        role_id: action.payload.role_id,
        userFollowed: action.payload.followers.some((follow) => follow.id === state.loggedUserId),
        isLoading: false,
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
      return {
        ...state,
        biography: action.payload,
      };
    }
    case USER_EXISTS: {
      return {
        ...state,
        userFound: action.value,
      };
    }
    case SAVE_AVATAR: {
      return {
        ...state,
        avatar_url: action.payload,
      };
    }
    default:
      return state;
  }
};

export default profile;
