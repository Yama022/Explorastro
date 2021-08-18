import { connect } from 'react-redux';
import Settings from 'src/components/Settings';

import { changeValue, changeUsername, changePassword } from 'src/actions/user';

const mapStateToProps = (state) => ({
  usernameChange: state.user.usernameChange,
  password: state.user.password,
  newPassword: state.user.newPassword,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, key) => {
    dispatch(changeValue(value, key));
  },
  handleUsernameChange: () => {
    dispatch(changeUsername());
  },
  handlePasswordChange: () => {
    dispatch(changePassword());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
