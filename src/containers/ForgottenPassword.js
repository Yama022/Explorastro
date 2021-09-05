import { connect } from 'react-redux';
import ForgottenPassword from 'src/components/ForgottenPassword';

import {
  setForgotPasswordFormErrors,
  onForgottenPasswordFormSubmit,
  changeValue,
} from 'src/actions/user';

const mapStateToProps = (state) => ({
  newForgottenPassword: state.user.newForgottenPassword,
  newForgottenPasswordConfirm: state.user.newForgottenPasswordConfirm,
  forgottenPasswordFieldHasError: state.user.forgottenPasswordFieldHasError,
  isPasswordResetSuccess: state.user.isPasswordResetSuccess,
});

const mapDispatchToProps = (dispatch) => ({
  handleSubmitForgottenPasswordForm: (value) => {
    dispatch(onForgottenPasswordFormSubmit(value));
  },
  handleErrors: (value) => {
    dispatch(setForgotPasswordFormErrors(value));
  },
  onChangeInputValue: (value, key) => {
    dispatch(changeValue(value, key));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ForgottenPassword);
