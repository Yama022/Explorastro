import {
  SUBMIT_FORM_UPDATE_EVENT,
  GET_EVENT_CREATED,
  saveEventcreated,
  SUBMIT_FROM_CREATE_EVENT,
  REMOVE_EVENT,
  getEventCreatedlast,
  GET_EVENT_CREATED_LAST,
  saveEventcreatedlast,
  GET_ALL_EVENTS,
  saveAllEvents,
  updateEvents,
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
      const newEvent = {
        name: state.exploration.titleEvent,
        description: state.exploration.descEvent,
        username: username,
        date: state.exploration.dateEvent,
        max_participants: state.exploration.maxRateEvent,
        location: position,
        is_published: state.exploration.published,
        image_url: state.exploration.imageUrl,

      };
      const sendPostEvent = async () => {
        try {
          await api.patch(`/api/v1/exploration/${id}/update`, newEvent);
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
      const newEvent = {
        name: state.exploration.titleEvent,

      };
      const sendEventName = async () => {
        try {
          await api.post('/api/v1/exploration/create', newEvent);
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
      const state = store.getState();
      const eventRemove = state.exploration.eventCreated.filter((element) => (
        element.id !== id));
      const deleteEvent = async () => {
        try {
          await api.delete(`/api/v1/exploration/${id}/delete`);
          store.dispatch(updateEvents(eventRemove));
        }
        catch (err) {
          console.error(err);
        }
      };
      deleteEvent();
      break;
    }
    case GET_ALL_EVENTS: {
      const getAllEvents = async () => {
        try {
          const resp = await api.get('/api/v1/exploration');
          const result = resp.data;
          store.dispatch(saveAllEvents(result));
        }
        catch (err) {
          console.error(err);
        }
      };
      getAllEvents();
      break;
    }

    default:
      next(action);
  }
};

export default event;
