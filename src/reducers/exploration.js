import {
  FORM_SUBMIT_SEARCH_ADDRESS,
  SAVE_EXPLORATION,
  CHANGE_INPUT,
  CHANGE_INPUT_VALUE_EXPLORATION,
  GET_COORD,
  ON_CLICK_PUBLISH,
  ADD_NEW_EXPLORATION,
  CLICK_MODAL,
  SAVE_ALL_EVENTS,
  UPDATE_EVENTS,
  SAVE_USER_EVENTS,
  SAVE_EVENT_TO_MODIFY,
  SAVE_EXPLORATION_BY_ID,
  REMOVE_OLD_STATE_EXPLORATION,
  SAVE_EXPLORATION_ILLUSTRATION,
} from 'src/actions/exploration';

export const initialState = {
  addressInput: '',
  address: [],
  events: [],
  exploration: {},
  userEvents: [],
  eventToModify: {},
  zone: 10,
  modal: false,
  participate: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FORM_SUBMIT_SEARCH_ADDRESS: {
      return {
        ...state,
        addressInput: action.payload,
      };
    }
    case SAVE_EXPLORATION: {
      return {
        ...state,
        sortie: action.payload,
      };
    }
    case CHANGE_INPUT: {
      return {
        ...state,
        zone: action.payload,
      };
    }
    case GET_COORD: {
      return {
        ...state,
        eventToModify: {
          ...state.eventToModify,
          location: action.value,
        },
      };
    }
    case CHANGE_INPUT_VALUE_EXPLORATION: {
      return {
        ...state,
        eventToModify: {
          ...state.eventToModify,
          [action.key]: action.value,
        },
      };
    }
    case SAVE_EVENT_TO_MODIFY: {
      return {
        ...state,
        eventToModify: action.payload,
      };
    }
    case SAVE_USER_EVENTS: {
      return {
        ...state,
        userEvents: action.value.organized_explorations,
        participate: action.value.explorations,
      };
    }
    case ON_CLICK_PUBLISH: {
      return {
        ...state,
        eventToModify: {
          ...state.eventToModify,
          is_published: !state.eventToModify.is_published,
        },
      };
    }
    case ADD_NEW_EXPLORATION: {
      return {
        ...state,
        userEvents: [...state.userEvents, action.payload],
        participate: [...state.userEvents, action.payload],
      };
    }
    case CLICK_MODAL: {
      return {
        ...state,
        modal: !state.modal,
      };
    }
    case SAVE_ALL_EVENTS: {
      return {
        ...state,
        events: action.value,
      };
    }
    case SAVE_EXPLORATION_BY_ID: {
      return {
        ...state,
        exploration: action.payload,
      };
    }
    case UPDATE_EVENTS: {
      return {
        ...state,
        userEvents: [...action.removedEvent],
        participate: [...action.removedParticipate],
      };
    }
    case REMOVE_OLD_STATE_EXPLORATION: {
      return {
        ...state,
        exploration: {},
      };
    }
    case SAVE_EXPLORATION_ILLUSTRATION: {
      return {
        ...state,
        eventToModify: {
          ...state.eventToModify,
          image_url: action.payload,
        },
      };
    }
    default:
      return state;
  }
};

export default reducer;
