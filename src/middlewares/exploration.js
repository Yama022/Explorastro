import {
  GET_EXPLORATION_BY_ID,
  POST_COMMENT,
  REMOVE_COMMENT,
  EDIT_COMMENT,
  ADD_PARTICIPANT,
  REMOVE_PARTICIPANT,
  saveExplorationById,
  getExplorationById,
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
          // eslint-disable-next-line no-console
          console.error(err);
          // Même si on a pas réussi à récupérer l'exploration,
          // on continue, car je veux que l'on puisse arrêter le loader,
          // et être redirigé vers la page d'erreur
          const result = saveExplorationById({});
          store.dispatch(result);
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
          if (response.status === 200) store.dispatch(getExplorationById(id));
        }
        catch (err) {
          // eslint-disable-next-line no-console
          console.error(err);
        }
      };
      onSubmitMessage();
      break;
    }

    case REMOVE_COMMENT: {
      const state = store.getState();
      const { id: idExplor } = state.exploration.exploration;
      const id = action.value;
      const deleteComment = async () => {
        try {
          const response = await api.delete(`/api/v1/exploration/${idExplor}/comments/delete/${id}`);
          if (response.status === 200) store.dispatch(getExplorationById(idExplor));
        }
        catch (error) {
          // eslint-disable-next-line no-console
          console.error(error);
        }
      };
      deleteComment();
      break;
    }

    case EDIT_COMMENT: {
      const state = store.getState();
      const { id: idExplor } = state.exploration.exploration;
      const modifyComment = async () => {
        try {
          const response = await api.patch(`/api/v1/exploration/${idExplor}/comments/edit/${state.exploration.commentEditId}`, {
            content: state.exploration.commentEdit,
          });
          if (response.status === 200) store.dispatch(getExplorationById(idExplor));
        }
        catch (error) {
          // eslint-disable-next-line no-console
          console.error(error);
        }
      };
      modifyComment();
      break;
    }

    case ADD_PARTICIPANT: {
      const state = store.getState();
      const { id } = state.exploration.exploration;
      const getParticipate = async () => {
        try {
          const response = await api.put(`/api/v1/exploration/${id}/participants/add/${state.user.loggedUserId}`);
          if (response.status === 200) store.dispatch(getExplorationById(id));
        }
        catch (error) {
          // eslint-disable-next-line no-console
          console.error(error);
        }
      };
      getParticipate();
      break;
    }

    case REMOVE_PARTICIPANT: {
      const state = store.getState();
      const { id } = state.exploration.exploration;
      const notParticipate = async () => {
        try {
          const response = await api.delete(`/api/v1/exploration/${id}/participants/delete/${state.user.loggedUserId}`);
          if (response.status === 200) store.dispatch(getExplorationById(id));
        }
        catch (error) {
          // eslint-disable-next-line no-console
          console.error(error);
        }
      };
      notParticipate();
      break;
    }

    default:
      next(action);
  }
};

export default exploration;
