import { connect } from 'react-redux';
import CreateEvent from 'src/components/CreateEvent';
import {
  changeInputCreateEvent, submitFormCreateEvent, getCoord, getEventCreated,
} from 'src/actions/exploration';

const mapStateToProps = (state) => ({
  eventsCreated: state.exploration.eventCreated,
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

export default connect(mapStateToProps, mapDispatchToProps)(CreateEvent);

// const submitForm = (form) => {
//   form.preventDefault();
//   const formData = new FormData();
//   formData.append('image', mydata.file);
//   // for (var pair of formData.entries()) {
//   //   console.log(pair[1]);
//   // }
//   const config = {
//     headers: {
//       'content-type': 'multipart/form-data',
//     },
//   };
//   axios
//     .post('api/profile/upload', formData, config)
//     .then((response) => {
//       alert('The file is successfully uploaded');
//     })
//     .catch((error) => {});
// };

// const onImageChange = (event) => {
//   if (event.target.files && event.target.files[0]) {
//     const reader = new FileReader();
//     const file = event.target.files[0];
//     reader.onloadend = () => {
//       setData({
//         ...mydata,
//         imagePreview: reader.result,
//         file: file,
//       });
//     };
//     reader.readAsDataURL(file);
//   }
// };
