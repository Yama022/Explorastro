import { connect } from 'react-redux';
import Header from 'src/components/Header';
import { toggleDropdown } from '../actions/user';

const mapStateToProps = (state) => ({
  isLogged: state.user.logged,
  username: state.user.username,
  isOpen: state.user.open,
});

const mapDispatchToProps = (dispatch) => ({
  handleToggleDropdown: () => {
    dispatch(toggleDropdown());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
