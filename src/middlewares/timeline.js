import {
  GET_TIMELINE,
  SEARCH_PEOPLE,
  saveUserTimeline,
  savePeople,
} from 'src/actions/timeline';

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
    case SEARCH_PEOPLE: {
      const state = store.getState();
      const searchForPeople = async () => {
        try {
          const resp = await api.get(`/api/v1/user/search?name=${state.timeline.searchInput}`);
          store.dispatch(savePeople(resp.data));
        }
        catch (err) {
          // eslint-disable-next-line no-console
          console.error('Erreur requête API', err);
        }
      };
      searchForPeople();
      break;
    }
    default:
      next(action);
  }
};

export default timeline;
