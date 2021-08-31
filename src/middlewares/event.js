import {
  SUBMIT_FORM_UPDATE_EVENT,
  GET_USER_EVENTS,
  SUBMIT_FROM_CREATE_EVENT,
  REMOVE_EVENT,
  GET_ALL_EVENTS,
  GET_EVENT_TO_MODIFY_DATA,
  saveUserEvents,
  saveAllEvents,
  updateEvents,
  saveEventToModify,
  addNewExploration,
} from 'src/actions/exploration';

import api from './utils/api';

const event = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_FORM_UPDATE_EVENT: {
      const state = store.getState();
      const explorationData = state.exploration.eventToModify;
      const sendPostEvent = async () => {
        try {
          await api.patch(`/api/v1/exploration/${explorationData.id}/update`, {
            name: explorationData.name,
            description: explorationData.description,
            date: explorationData.date,
            max_participants: explorationData.max_participants,
            is_published: explorationData.is_published,
            image_url: explorationData.image_url,
            location: {
              lng: explorationData.location?.lng ?? explorationData.geog?.coordinates[0],
              lat: explorationData.location?.lat ?? explorationData.geog?.coordinates[1],
            },
          });
        }
        catch (err) {
          // eslint-disable-next-line no-console
          console.error(err);
        }
      };
      sendPostEvent();
      break;
    }
    case GET_USER_EVENTS: {
      const user = JSON.parse(localStorage.getItem('user'));
      const { id } = user;
      const getEvent = async () => {
        try {
          const response = await api.get(`/api/v1/user/${id}`);
          const results = response.data;
          const userExplorations = results.organized_explorations;
          store.dispatch(saveUserEvents(userExplorations));
        }
        catch (err) {
          // eslint-disable-next-line no-console
          console.error(err);
        }
      };
      getEvent();
      break;
    }
    case GET_EVENT_TO_MODIFY_DATA: {
      const getEvent = async () => {
        try {
          const response = await api.get(`/api/v1/exploration/${action.payload}`);
          const results = response.data;
          store.dispatch(saveEventToModify(results));
        }
        catch (err) {
          // eslint-disable-next-line no-console
          console.error(err);
        }
      };
      getEvent();
      break;
    }
    case SUBMIT_FROM_CREATE_EVENT: {
      const state = store.getState();
      const sendEventName = async () => {
        try {
          const response = await api.post('/api/v1/exploration/create', {
            name: state.exploration.eventToModify.newTitle,
          });
          store.dispatch(addNewExploration(response.data));
        }
        catch (err) {
          // eslint-disable-next-line no-console
          console.error(err);
        }
      };
      sendEventName();
      break;
    }
    case REMOVE_EVENT: {
      const id = action.payload;
      const state = store.getState();
      const removedEvent = state.exploration.userEvents.filter((evt) => (evt.id !== id));
      const deleteEvent = async () => {
        try {
          await api.delete(`/api/v1/exploration/${id}/delete`);
          store.dispatch(updateEvents(removedEvent));
        }
        catch (err) {
          // eslint-disable-next-line no-console
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
          // eslint-disable-next-line no-console
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
