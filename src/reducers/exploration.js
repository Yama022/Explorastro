import {
  FORM,
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
  SAVE_ADDRESS,
} from 'src/actions/exploration';

export const initialState = {
  addressInput: '',
  address: [],
  events: [],
  titleEvent: '',
  descEvent: '',
  zone: 10,
  street: '',
  city: '',
  postalCode: 0,
  dateEvent: '',
  maxRateEvent: 0,
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
    case FORM: {
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
      const events = action.value.organized_explorations.map((element) => (element));
      return {
        ...state,
        eventCreated: events,

      };
    }
    case ON_CLICK_PUBLISHED: {
      return {
        ...state,
        published: !state.published,

      };
    }
    case EVENTS_CREATED: {
      console.log(action.value.geog);
      return {
        ...state,
        titleEvent: action.value.name,
        descEvent: action.value.description,
        dateEvent: action.value.date,
        maxRateEvent: action.value.max_participants,
        geog: action.value.geog,
      };
    }
    case SAVE_EVENT_CREATED_LAST: {
      return {
        ...state,
        eventCreatedLast: action.value,
        published: initialState.published,

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
    case SAVE_ADDRESS: {
      return {
        ...state,
        address: [...state.address, action.value],

      };
    }
    default:
      return state;
  }
};

export default reducer;
