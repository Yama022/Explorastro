import { GET_EXPLORATION_BY_ID, saveExplorationById } from 'src/actions/exploration';
import api from './utils/api';

const exploration = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_EXPLORATION_BY_ID: {
      const id = action.payload;
      const getEvent = async () => {
        try {
          const resp = await api.get(`/api/v1/exploration/${id}/`);
          const result = saveExplorationById(resp.data);
          store.dispatch(result);
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

export default exploration;
