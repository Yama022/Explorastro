import {
  SUBMIT_FORM_UPDATE_EVENT,
  GET_EVENT_CREATED,
  saveEventcreated,
  SUBMIT_FROM_CREATE_EVENT,
  REMOVE_EVENT,
  getEventCreatedlast,
  GET_EVENT_CREATED_LAST,
  saveEventcreatedlast,
} from 'src/actions/exploration';
import { findEventByName } from '../selectors/exploration';
import api from './utils/api';

const event = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_FORM_UPDATE_EVENT: {
      const { username } = localStorage.getItem('user');
      const state = store.getState();
      const position = state.exploration.coord;
      const id = action.value;
      console.log(position);
      const newEvent = {
        name: state.exploration.titleEvent,
        description: state.exploration.descEvent,
        username: username,
        date: state.exploration.dateEvent,
        max_participants: state.exploration.maxRateEvent,
        location: position,
        is_published: state.exploration.published,

      };
      const sendPostEvent = async () => {
        try {
          const resp = await api.patch(`/api/v1/exploration/${id}/update`, newEvent);
          console.log(resp);
        }
        catch (err) {
          console.error(err);
        }
      };
      sendPostEvent();
      break;
    }
    case GET_EVENT_CREATED: {
      const user = JSON.parse(localStorage.getItem('user'));
      const { id } = user;
      const getEvent = async () => {
        try {
          const resp = await api.get(`/api/v1/user/${id}`);
          const result = resp.data;
          store.dispatch(saveEventcreated(result));
        }
        catch (err) {
          console.error(err);
        }
      };
      getEvent();
      break;
    }
    case GET_EVENT_CREATED_LAST: {
      const user = JSON.parse(localStorage.getItem('user'));
      const { id } = user;
      const getEvent = async () => {
        try {
          const resp = await api.get(`/api/v1/user/${id}`);
          const result = resp.data;
          const titleEvent = action.value;
          const lastEvent = findEventByName(result.organized_explorations, titleEvent);

          store.dispatch(saveEventcreatedlast(lastEvent));
        }
        catch (err) {
          console.error(err);
        }
      };
      getEvent();
      break;
    }
    case SUBMIT_FROM_CREATE_EVENT: {
      const state = store.getState();
      console.log(state.exploration.titleEvent);
      const newEvent = {
        name: state.exploration.titleEvent,

      };
      const sendEventName = async () => {
        try {
          const resp = await api.post('/api/v1/exploration/create', newEvent);
          console.log(resp);
          store.dispatch(getEventCreatedlast(state.exploration.titleEvent));
        }
        catch (err) {
          console.error(err);
        }
      };
      sendEventName();
      break;
    }
    case REMOVE_EVENT: {
      const id = action.value;
      console.log(id);
      const deleteEvent = async () => {
        try {
          const resp = await api.delete(`/api/v1/exploration/${id}/delete`);
          console.log(resp);
        }
        catch (err) {
          console.error(err);
        }
      };
      deleteEvent();
      break;
    }

    default:
      next(action);
  }
};

export default event;
