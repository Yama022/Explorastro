import { connect } from 'react-redux';
import CreateEvent from 'src/components/CreateEvent';
import {
  getUserEvents,
  changeInputValue,
  submitFormCreateEvent,
  removeEvent,
  setFormEventFielsHasErrors,
  changeNewEventInputValue,
} from 'src/actions/exploration';

const mapStateToProps = (state) => ({
  userEvents: state.exploration.userEvents,
  participate: state.exploration.participate,
  isLoading: state.exploration.isLoading,
  loginError: state.exploration.loginError,
  fieldHasError: state.exploration.fieldHasError,
  newTitle: state.exploration.newTitle,
});

const mapDispatchToProps = (dispatch) => ({
  getEvent: () => {
    const action = getUserEvents();
    dispatch(action);
  },
  onChangeInput: (value, key) => {
    const action = changeInputValue(value, key);
    dispatch(action);
  },
  onNewEventChange: (value, key) => {
    const action = changeNewEventInputValue(value, key);
    dispatch(action);
  },
  onFormSubmitCreate: () => {
    const action = submitFormCreateEvent();
    dispatch(action);
  },
  onClickRemove: (value) => {
    const action = removeEvent(value);
    dispatch(action);
  },
  handleFieldHasError: (payload) => {
    dispatch(setFormEventFielsHasErrors(payload));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateEvent);
