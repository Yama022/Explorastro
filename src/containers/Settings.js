import { connect } from 'react-redux';
import Settings from 'src/components/Settings';

import { changeValue, changeUsername } from 'src/actions/user';

const mapStateToProps = (state) => ({
  usernameChange: state.user.usernameChange,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, key) => {
    dispatch(changeValue(value, key));
  },
  handleUsernameChange: () => {
    dispatch(changeUsername());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
