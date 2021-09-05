import { SAVE_AVATAR } from 'src/actions/profile';
import {
  CHANGE_VALUE,
  TOGGLE_SIGNUP,
  LOGOUT,
  SAVE_USER,
  LOGIN_ERROR,
  SET_FIELD_HAS_ERROR,
  SET_FORGOT_PASSWORD_FORM_ERRORS,
  PASSWORD_RESET_IS_SUCCESS,
} from 'src/actions/user';

const initialState = {
  loggedUserId: 0,
  loggedUserFollowing: [],
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  passwordConfirmation: '',
  newPassword: '',
  passwordForUsername: '',
  username: '',
  usernameChange: '',
  logged: null,
  signup: 2,
  loginError: '',
  fieldHasError: {},
  newTwitter: '',
  newInstagram: '',
  newFacebook: '',
  newTiktok: '',
  newAstrobin: '',
  newForgottenPassword: '',
  newForgottenPasswordConfirm: '',
  forgottenPasswordFieldHasError: {},
  isPasswordResetSuccess: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_VALUE: {
      return {
        ...state,
        [action.key]: action.value,
      };
    }
    case TOGGLE_SIGNUP: {
      return {
        ...state,
        signup: action.value,
        loginError: '',
        fieldHasError: {},
      };
    }
    case LOGOUT: {
      localStorage.removeItem('user');
      return {
        ...initialState,
        logged: false,
      };
    }
    case SAVE_USER: {
      return {
        ...state,
        loggedUserId: action.payload?.id,
        username: action.payload?.username ?? '',
        logged: !!action.payload?.username,
        avatar_url: action.payload?.avatar_url,
        newTwitter: action.payload?.twitter,
        newInstagram: action.payload?.instagram,
        newFacebook: action.payload?.facebook,
        newTiktok: action.payload?.tiktok,
        newAstrobin: action.payload?.astrobin,
        email: '',
        password: '',
        passwordConfirmation: '',
        usernameChange: '',
        passwordForUsername: '',
        isPasswordResetSucces: false,
      };
    }
    case SAVE_AVATAR: {
      return {
        ...state,
        avatar_url: action.payload,
      };
    }
    case LOGIN_ERROR: {
      return {
        ...state,
        loginError: action.payload,
      };
    }
    case SET_FIELD_HAS_ERROR: {
      return {
        ...state,
        fieldHasError: action.value,
      };
    }
    case SET_FORGOT_PASSWORD_FORM_ERRORS: {
      return {
        ...state,
        newForgottenPassword: '',
        newForgottenPasswordConfirm: '',
        forgottenPasswordFieldHasError: action.value,
      };
    }
    case PASSWORD_RESET_IS_SUCCESS: {
      return {
        ...state,
        newForgottenPassword: '',
        newForgottenPasswordConfirm: '',
        isPasswordResetSuccess: true,
      };
    }
    default:
      return state;
  }
};

export default reducer;
