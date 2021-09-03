import {
  SEARCH_EXPLORATION_WITH_FILTERS,
} from 'src/actions/discover';

import {
  saveAllEvents,
} from 'src/actions/exploration';

import api from './utils/api';

const discover = (store) => (next) => (action) => {
  switch (action.type) {
    case SEARCH_EXPLORATION_WITH_FILTERS: {
      const {
        latitude: lat, longitude: lng, name, radius,
      } = action.filters;
      const search = async () => {
        let query = `/api/v1/exploration?search=${name}`;
        if (lng && lat && radius) {
          query += `&lng=${lng}&lat=${lat}&radius=${radius}`;
        }
        console.log(query);
        const searchResults = await api.get(query);
        console.log(searchResults.data);
        store.dispatch(saveAllEvents(searchResults.data));
      };
      search();
    }
      break;
    default:
      next(action);
  }
};

export default discover;
