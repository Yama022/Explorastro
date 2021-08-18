import { connect } from 'react-redux';
import CreateEvent from 'src/components/CreateEvent';
import { changeInputCreateEvent, submitFormCreateEvent, getCoord } from 'src/actions/exploration';

const mapStateToProps = () => ({

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

});

export default connect(mapStateToProps, mapDispatchToProps)(CreateEvent);
