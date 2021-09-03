import { connect } from 'react-redux';
import CreateEvent from 'src/components/CreateEvent';
import {
  getUserEvents,
  changeInputValue,
  submitFormCreateEvent,
  removeEvent,
} from 'src/actions/exploration';

const mapStateToProps = (state) => ({
  userEvents: state.exploration.userEvents,
  participate: state.exploration.participate,
  isLoading: state.exploration.isLoading,
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
  onFormSubmitCreate: () => {
    const action = submitFormCreateEvent();
    dispatch(action);
  },
  onClickRemove: (value) => {
    const action = removeEvent(value);
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateEvent);
