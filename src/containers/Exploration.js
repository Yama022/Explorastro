import { connect } from 'react-redux';
import Exploration from 'src/components/Exploration';

import {
  getExplorationById,
  removeOldStateExploration,
  postComment,
  changeValueComment,
} from 'src/actions/exploration';

const mapStateToProps = (state) => ({
  exploration: state.exploration.exploration,
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
  onChangeValue: (value, key) => {
    dispatch(changeValueComment(value, key));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Exploration);
