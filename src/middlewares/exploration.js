import {
  GET_EXPLORATION_BY_ID,
  saveExplorationById,
  POST_COMMENT,
  saveComment,
} from 'src/actions/exploration';
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

    case POST_COMMENT: {
      const state = store.getState();
      const { id } = state.exploration.exploration;
      const onSubmitMessage = async () => {
        try {
          const response = await api.post(`/api/v1/exploration/${id}/comments/add`, {
            content: state.exploration.comment,
          });
          const result = saveComment(response.data);
          store.dispatch(result);
        }
        catch (err) {
          console.error(err);
        }
      };
      onSubmitMessage();
      break;
    }

    default:
      next(action);
  }
};

export default exploration;
