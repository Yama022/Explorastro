import { connect } from 'react-redux';
import FormEvent from 'src/components/CreateEvent/FormEvent';
import {
  changeInputValue,
  submitFormUpdateEvent,
  getCoord,
  onClickPublish,
  clickModal,
  getEventToModifyData,
  uploadExplorationIllustration,
  setEventFieldHasError,
} from 'src/actions/exploration';

const mapStateToProps = (state) => ({
  eventToModify: state.exploration.eventToModify,
  modal: state.exploration.modal,
  eventFieldHasError: state.exploration.eventFieldHasError,
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
  togglePublished: () => {
    const action = onClickPublish();
    dispatch(action);
  },
  onClickModal: () => {
    const action = clickModal();
    dispatch(action);
  },
  uploadIllustration: (value, id) => {
    dispatch(uploadExplorationIllustration(value, id));
  },
  handleFieldHasError: (value) => {
    dispatch(setEventFieldHasError(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FormEvent);
