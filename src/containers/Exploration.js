import { connect } from 'react-redux';
import Exploration from 'src/components/Exploration';

import {
  getExplorationById,
  removeOldStateExploration,
  postComment,
  removeComment,
  changeValueComment,
  addParticipant,
  removeParticipant,
} from 'src/actions/exploration';

const mapStateToProps = (state) => ({
  exploration: state.exploration.exploration,
  loggedUserId: state.user.loggedUserId,
});
const mapDispatchToProps = (dispatch) => ({
  getExploration: (payload) => {
    dispatch(getExplorationById(payload));
  },
  removeOldStateExploration: (payload) => {
    dispatch(removeOldStateExploration(payload));
  },
  onSubmitMessage: () => {
    const action = postComment();
    dispatch(action);
  },
  deleteComment: (value) => {
    dispatch(removeComment(value));
  },
  onChangeValue: (value, key) => {
    dispatch(changeValueComment(value, key));
  },
  getParticipate: (value) => {
    dispatch(addParticipant(value));
  },
  notParticipate: (value) => {
    dispatch(removeParticipant(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Exploration);
