import { connect } from 'react-redux';
import FormEvent from 'src/components/CreateEvent/FormEvent';
import {
  changeInputCreateEvent,
  submitFormUpdateEvent,
  getCoord, getEventCreated,
  OnclickPublished,
  eventsCreated,
  clickModal,
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
  coord: state.exploration.geog,
  modal: state.exploration.modal,

});

const mapDispatchToProps = (dispatch) => ({
  onChangeInput: (value, key) => {
    const action = changeInputCreateEvent(value, key);
    dispatch(action);
  },
  onFormSubmitUpdateEvent: (value) => {
    const action = submitFormUpdateEvent(value);
    dispatch(action);
  },
  getCoordLocation: (value) => {
    const action = getCoord(value);
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

  OnClickModal: () => {
    const action = clickModal();
    dispatch(action);
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(FormEvent);
