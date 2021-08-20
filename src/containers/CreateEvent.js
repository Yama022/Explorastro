import { connect } from 'react-redux';
import CreateEvent from 'src/components/CreateEvent';
import {
  getEventCreated, changeInputCreateEvent,
  submitFormCreateEvent,
} from 'src/actions/exploration';

const mapStateToProps = (state) => ({
  eventsCreated: state.exploration.eventCreated,
});

const mapDispatchToProps = (dispatch) => ({

  getEvent: () => {
    const action = getEventCreated();
    dispatch(action);
  },
  onChangeInput: (value, key) => {
    const action = changeInputCreateEvent(value, key);
    dispatch(action);
  },
  onFormSubmitCreate: (value) => {
    const action = submitFormCreateEvent(value);
    dispatch(action);
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(CreateEvent);
