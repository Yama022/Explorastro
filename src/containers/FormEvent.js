import { connect } from 'react-redux';
import FormEvent from 'src/components/CreateEvent/FormEvent';
import {
  changeInputCreateEvent, submitFormCreateEvent, getCoord, getEventCreated,
} from 'src/actions/exploration';

import { findEvent } from 'src/selectors/exploration';

const mapStateToProps = (state, ownProps) => ({
  // eventsCreated: state.exploration.eventCreated,
  eventCreated: findEvent(state.exploration.eventCreated, ownProps.match.params.id),

});

const mapDispatchToProps = (dispatch) => ({
  onChangeInput: (value, key) => {
    const action = changeInputCreateEvent(value, key);
    dispatch(action);
  },
  onFormSubmit: () => {
    const action = submitFormCreateEvent();
    dispatch(action);
  },
  getCoordLocation: (value) => {
    const action = getCoord(value);
    console.log(value);
    dispatch(action);
  },

  getEvent: () => {
    const action = getEventCreated();
    dispatch(action);
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(FormEvent);
