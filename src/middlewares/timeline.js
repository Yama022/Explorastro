// import { GET_TIMELINE } from 'src/actions/timeline';
import { GET_TIMELINE, saveUserTimeline } from 'src/actions/timeline';

import api from './utils/api';

const timeline = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_TIMELINE: {
      const getTimeline = async () => {
        try {
          const resp = await api.get('/api/v1/timeline');
          const result = resp.data;
          store.dispatch(saveUserTimeline(result));
        }
        catch (err) {
          // eslint-disable-next-line no-console
          console.error('Erreur requête API', err);
        }
      };
      getTimeline();
      break;
    }
    default:
      next(action);
  }
};

export default timeline;
