import { SUBMIT_FORM_CREATE_EVENT } from 'src/actions/exploration';
import api from './utils/api';

const event = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_FORM_CREATE_EVENT: {
      const { username } = localStorage.getItem('user');
      const state = store.getState();
      const position = state.exploration.coord;
      console.log(position.lat);
      console.log('toto');
      const newEvent = {
        name: state.exploration.titleEvent,
        description: state.exploration.descEvent,
        author_id: username,
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

    default:
      next(action);
  }
};

export default event;
