import { connect } from 'react-redux';
import ForgottenPassword from 'src/components/ForgottenPassword';

import {
  setForgotPasswordFormErrors,
  tokenForgotPassword,
  setFieldHasError,
} from 'src/actions/user';

const mapStateToProps = (state) => ({
  password: state.user.password,
  passwordConfirmation: state.user.passwordConfirmation,
  fieldHasError: state.user.fieldHasError,
});

const mapDispatchToProps = (dispatch) => ({
  setForgotPasswordForm: () => {
    dispatch(setForgotPasswordFormErrors());
  },
  receipeTokenForgotPassword: () => {
    dispatch(tokenForgotPassword());
  },
  handleFieldHasError: (value) => {
    dispatch(setFieldHasError(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ForgottenPassword);
