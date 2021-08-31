import { connect } from 'react-redux';
import FormEvent from 'src/components/CreateEvent/FormEvent';
import {
  changeInputValue,
  submitFormUpdateEvent,
  getCoord,
  onClickPublished,
  clickModal,
  getEventToModifyData,
} from 'src/actions/exploration';

const mapStateToProps = (state) => ({
  eventToModify: state.exploration.eventToModify,
  modal: state.exploration.modal,
});

const mapDispatchToProps = (dispatch) => ({
  getEventData: (id) => {
    dispatch(getEventToModifyData(id));
  },
  onChangeInput: (value, key) => {
    const action = changeInputValue(value, key);
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
  onClick: () => {
    const action = onClickPublished();
    dispatch(action);
  },
  onClickModal: () => {
    const action = clickModal();
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FormEvent);
