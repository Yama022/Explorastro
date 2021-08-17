import { connect } from 'react-redux';
import Login from 'src/components/Login';
import { changeValue, login, logout } from 'src/actions/user';

const mapStateToProps = (state) => ({
  email: state.user.email,
  password: state.user.password,
  isLogged: state.user.logged,
  username: state.user.username,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, key) => {
    dispatch(changeValue(value, key));
  },
  handleLogin: () => {
    dispatch(login());
  },
  handleLogout: () => {
    dispatch(logout());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
