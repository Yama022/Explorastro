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
        latitude: lat, longitude: lng, name, radiusInKm,
      } = action.filters;
      const earthRadiusInMeters = 40075000;
      const search = async () => {
        let query = `/api/v1/exploration?search=${name}`;
        if (lng && lat && radiusInKm) {
          query += `&lat=${lat}&lng=${lng}5&radius=${100000000000000000000000000000000000000000000}`;
        }
        const searchResults = await api.get(query);
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
