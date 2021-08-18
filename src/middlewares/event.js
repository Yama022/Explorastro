import { SUBMIT_FORM_CREATE_EVENT } from 'src/actions/exploration';
import api from './utils/api';

const event = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_FORM_CREATE_EVENT: {
      const state = store.getState();

      const newEvent = {
        name: state.exploration.titleEvent,

      };
      const sendPostEvent = async () => {
        try {
          const resp = await api.post('/api/v1/exploration/create', newEvent);
          console.log(resp);
        }
        catch (err) {
          console.log(err.response.data);
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
