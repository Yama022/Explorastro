import {
  SUBMIT_FORM_CREATE_EVENT, GET_COORD, coord,
} from 'src/actions/exploration';
import axios from 'axios';
import api from './utils/api';

const event = (store) => (next) => (action) => {
  switch (action.type) {
    // case SUBMIT_FORM_CREATE_EVENT: {
    //   const { username } = localStorage.getItem('user');
    //   const state = store.getState();
    //   const { lat, lon } = state.exploration;
    //   const position = { lat, lon };
    //   console.log(position);
    //   const newEvent = {
    //     name: state.exploration.titleEvent,
    //     description: state.exploration.descEvent,
    //     author_id: username,
    //     date: state.exploration.dateEvent,
    //     max_participants: state.exploration.maxRateEvent,
    //   };
    //   const sendPostEvent = async () => {
    //     try {
    //       const resp = await api.post('/api/v1/exploration/create', newEvent);
    //       console.log(resp);
    //     }
    //     catch (err) {
    //       console.error(err);
    //     }
    //   };
    //   sendPostEvent();
    //   break;
    // }
    case SUBMIT_FORM_CREATE_EVENT: {
      const state = store.getState();
      const { street, city, postalCode } = state.exploration;
      const sendPostEvent = async () => {
        try {
          const resp = await axios.get(`https://nominatim.openstreetmap.org/search?street=${street}&city=${city}&postalcode=${postalCode}&format=json`);
          const { lat, lon } = resp.data[0];
          store.dispatch(coord(lat, lon));
        }
        catch (err) {
          console.log('');
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
