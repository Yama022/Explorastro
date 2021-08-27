import { connect } from 'react-redux';
import Exploration from 'src/components/Exploration';

import { getExplorationById } from 'src/actions/exploration';

const mapStateToProps = (state) => ({
  exploration: state.exploration.exploration,

});
const mapDispatchToProps = (dispatch) => ({
  getExploration: (payload) => {
    dispatch(getExplorationById(payload));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Exploration);
