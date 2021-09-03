import { connect } from 'react-redux';
import Discover from 'src/components/Discover';
import { getAllEvents, changeInput } from 'src/actions/exploration';
import { searchExplorationWithFilters } from 'src/actions/discover';

const mapStateToProps = (state) => ({
  events: state.exploration.events,
  address: state.exploration.address,
  zone: state.exploration.zone,
});

const mapDispatchToProps = (dispatch) => ({
  onFormSubmit: (value) => {
    const action = searchExplorationWithFilters(value);
    dispatch(action);
  },

  onChangeInput: (value) => {
    const action = changeInput(value);
    dispatch(action);
  },

  getEvents: () => {
    const action = getAllEvents();
    dispatch(action);
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(Discover);
