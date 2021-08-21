import { CHANGE_PROFILE_MENU } from 'src/actions/profile';

const initialState = {
  username: '',
  firstname: 'John',
  lastname: 'Osterman',
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
    default:
      return state;
  }
};

export default profile;
