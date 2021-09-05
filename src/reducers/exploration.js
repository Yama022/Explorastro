import {
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
  CHANGE_VALUE_COMMENT,
  REMOVE_COMMENT,
  EDIT_COMMENT,
  SET_COMMENT_EDIT_VALUE,
  SET_COMMENT_ID_VALUE,
  HANDLE_TOGGLE_COMM_EDIT,
  NEW_PARTICIPANT,
  REMOVE_PARTICIPANT,
  SET_FORM_EVENT_FIELDS_HAS_ERROR,
  CHANGE_INPUT_NEW_EVENT,
  SET_COMMENT_FIELD_HAS_ERROR,
} from 'src/actions/exploration';

export const initialState = {
  addressInput: '',
  address: [],
  events: [],
  exploration: {},
  userEvents: [],
  eventToModify: {
    newTitle: '',
  },
  zone: 10,
  modal: false,
  participate: [],
  comment: '',
  commentEdit: '',
  commentEditId: 0,
  commentEditOpen: false,
  isEventLoading: true,
  commentFieldHasError: {},
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
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
    case CHANGE_INPUT_NEW_EVENT: {
      return {
        ...state,
        [action.key]: action.value,
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
        isLoading: false,
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
        participate: [...state.participate, action.payload],
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
        comment: '',
        commentEdit: '',
        commentEditOpen: false,
        isEventLoading: false,
        commentFieldHasError: {},
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
        isEventLoading: true,
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
    case CHANGE_VALUE_COMMENT: {
      return {
        ...state,
        [action.key]: action.value,
      };
    }
    case REMOVE_COMMENT: {
      return {
        ...state,
      };
    }
    case EDIT_COMMENT: {
      return {
        ...state,
      };
    }
    case SET_COMMENT_EDIT_VALUE: {
      return {
        ...state,
        commentEdit: action.value,
      };
    }
    case SET_COMMENT_ID_VALUE: {
      return {
        ...state,
        commentEditId: action.value,
      };
    }
    case HANDLE_TOGGLE_COMM_EDIT: {
      return {
        ...state,
        commentEditOpen: !state.commentEditOpen,
      };
    }
    case NEW_PARTICIPANT: {
      return {
        ...state,
      };
    }
    case REMOVE_PARTICIPANT: {
      return {
        ...state,
      };
    }
    case SET_FORM_EVENT_FIELDS_HAS_ERROR: {
      return {
        ...state,
        fieldHasError: action.payload,
      };
    }
    case SET_COMMENT_FIELD_HAS_ERROR: {
      return {
        ...state,
        commentFieldHasError: action.payload,
      };
    }
    default:
      return state;
  }
};

export default reducer;
