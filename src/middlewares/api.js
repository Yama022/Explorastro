import { SAVE_VILLE } from '../actions/exploration';
import { filterExploration } from '../selectors/filterExploration';

const api = (store) => (next) => (action) => {
  switch (action.type) {
    case SAVE_VILLE: {
      const state = store.getState();
      console.log('titi');
      const explorations = filterExploration(state.exploration.sortie, state.exploration.ville);

      // store.dispatch(saveExplorations(explorations));
      break;
    }
    default:
      next(action);
  }
};

export default api;
