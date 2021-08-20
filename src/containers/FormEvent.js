import { connect } from 'react-redux';
import FormEvent from 'src/components/CreateEvent/FormEvent';
import {
  changeInputCreateEvent,
  submitFormCreateEvent,
  getCoord, getEventCreated,
  OnclickPublished,
  eventsCreated,
} from 'src/actions/exploration';

import { findEvent } from 'src/selectors/exploration';

const mapStateToProps = (state, ownProps) => ({
  // eventsCreated: state.exploration.eventCreated,
  eventCreated: findEvent(state.exploration.eventCreated, ownProps.match.params.id),
  titleEvent: state.exploration.titleEvent,
  dateEvent: state.exploration.dateEvent,
  maxRateEvent: state.exploration.maxRateEvent,
  descEvent: state.exploration.descEvent,
  published: state.exploration.published,

});

const mapDispatchToProps = (dispatch) => ({
  onChangeInput: (value, key) => {
    const action = changeInputCreateEvent(value, key);
    dispatch(action);
  },
  onFormSubmit: (value) => {
    const action = submitFormCreateEvent(value);
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

  OnClick: () => {
    const action = OnclickPublished();
    dispatch(action);
  },

  getEventsCreated: (value) => {
    const action = eventsCreated(value);
    dispatch(action);
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(FormEvent);
