import { SUBMIT_FORM_CREATE_EVENT, GET_EVENT_CREATED, saveEventcreated } from 'src/actions/exploration';
import api from './utils/api';

const event = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_FORM_CREATE_EVENT: {
      const { username } = localStorage.getItem('user');
      const state = store.getState();
      const position = state.exploration.coord;
      console.log(position.lat);
      const newEvent = {
        name: state.exploration.titleEvent,
        description: state.exploration.descEvent,
        username: username,
        date: state.exploration.dateEvent,
        max_participants: state.exploration.maxRateEvent,

      };
      const sendPostEvent = async () => {
        try {
          const resp = await api.post('/api/v1/exploration/create', newEvent);
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
          console.log(result);
          store.dispatch(saveEventcreated(result));
        }
        catch (err) {
          console.error(err);
        }
      };
      getEvent();
      break;
    }

    default:
      next(action);
  }
};

export default event;
