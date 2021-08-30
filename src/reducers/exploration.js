import {
  FORM_SUBMIT_SEARCH_ADDRESS,
  SAVE_EXPLORATION,
  CHANGE_INPUT,
  CHANGE_INPUT_CREATE_EVENT,
  GET_COORD,
  SAVE_EVENT_CREATED,
  ON_CLICK_PUBLISHED,
  EVENTS_CREATED,
  SAVE_EVENT_CREATED_LAST,
  REMOVE_LAST_EVENT_ID,
  CLICK_MODAL,
  SAVE_ALL_EVENTS,
  UPDATE_EVENTS,
  SAVE_EXPLORATION_BY_ID,
  REMOVE_OLD_STATE_EXPLORATION,
  CLEAR_OLD_STATE,

} from 'src/actions/exploration';

export const initialState = {
  addressInput: '',
  address: [],
  events: [],
  exploration: {},
  titleEvent: '',
  descEvent: '',
  zone: 10,
  dateEvent: '',
  maxRateEvent: '',
  coord: [],
  eventCreated: [],
  published: false,
  eventCreatedLast: [],
  geog: [],
  modal: false,
  imageUrl: '',
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
        coord: action.value,
      };
    }
    case CHANGE_INPUT_CREATE_EVENT: {
      return {
        ...state,
        [action.key]: action.value,

      };
    }
    case SAVE_EVENT_CREATED: {
      return {
        ...state,
        eventCreated: action.value.organized_explorations,

      };
    }
    case ON_CLICK_PUBLISHED: {
      return {
        ...state,
        published: !state.published,

      };
    }
    case EVENTS_CREATED: {
      return {
        ...state,
        titleEvent: action.value.name,
        descEvent: action.value.description,
        dateEvent: action.value.date,
        maxRateEvent: action.value.max_participants,
        geog: action.value.geog,
        published: action.value.is_published,
      };
    }
    case SAVE_EVENT_CREATED_LAST: {
      return {
        ...state,
        eventCreated: [...state.eventCreated, action.value],
        eventCreatedLast: action.value,

      };
    }
    case REMOVE_LAST_EVENT_ID: {
      return {
        ...state,
        eventCreatedLast: initialState.eventCreatedLast,

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

    case UPDATE_EVENTS: {
      return {
        ...state,
        eventCreated: [...action.value],
      };
    }
    case SAVE_EXPLORATION_BY_ID: {
      return {
        ...state,
        exploration: action.payload,
      };
    }
    case REMOVE_OLD_STATE_EXPLORATION:
    {
      return {
        ...state,
        exploration: initialState.exploration,
      };
    }
    case CLEAR_OLD_STATE: {
      return {
        ...state,
        geog: initialState.geog,
      };
    }
    default:
      return state;
  }
};

export default reducer;
