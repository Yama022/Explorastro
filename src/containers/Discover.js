import { connect } from 'react-redux';
import Discover from 'src/components/Discover';
import { getAllEvents, formSubmit, changeInput } from 'src/actions/exploration';
import { filterExploration } from '../selectors/filterExploration';

const mapStateToProps = (state) => ({
  events: state.exploration.events,
  address: state.exploration.address,
  explorationsFilter: filterExploration(state.exploration.events, state.exploration.addressInput),
  zone: state.exploration.zone,
});

const mapDispatchToProps = (dispatch) => ({
  onFormSubmit: (value) => {
    const action = formSubmit(value);
    dispatch(action);
  },

  onChangeInput: (value) => {
    const action = changeInput(value);
    dispatch(action);
  },
  getEvents: () => {
    console.log('ici');
    const action = getAllEvents();
    dispatch(action);
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(Discover);
