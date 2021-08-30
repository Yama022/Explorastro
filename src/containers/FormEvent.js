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

const mapStateToProps = (state) => {
  // eslint-disable-next-line no-console
  console.log('State d\'exploration', state.exploration);
  return {
    eventToModify: state.exploration.eventToModify,
    modal: state.exploration.modal,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getEventData: (id) => {
    console.log('Je lance l\'action getEventData');
    dispatch(getEventToModifyData(id));
  },
  onChangeInput: (value, key) => {
    console.log(changeInputValue);
    const action = changeInputValue(value, key);
    console.log('Je souhaite changer la value', value, key);
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
