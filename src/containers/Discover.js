import { connect } from 'react-redux';
import Discover from 'src/components/Discover/';
import { formSubmit } from 'src/actions/exploration';
import { filterExploration } from '../selectors/filterExploration';

const mapStateToProps = (state) => ({
  data: state.exploration.sortie,
  ville: state.exploration.ville,
  explorations: filterExploration(state.exploration.sortie, state.exploration.ville),
});

const mapDispatchToProps = (dispatch) => ({
  onFormSubmit: (value) => {
    const action = formSubmit(value);
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Discover);
