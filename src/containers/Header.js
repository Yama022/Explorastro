import { connect } from 'react-redux';
import Header from 'src/components/Header';
import { toggleBurger, toggleDropdown } from 'src/actions/header';
import { logout } from 'src/actions/user';

const mapStateToProps = (state) => ({
  isLogged: state.user.logged,
  username: state.user.username,
  dropdownIsOpen: state.header.dropdownOpen,
  burgerIsOpen: state.header.burgerOpen,
  loggedUserId: state.user.loggedUserId,
});

const mapDispatchToProps = (dispatch) => ({
  handleToggleBurger: () => {
    dispatch(toggleBurger());
  },
  handleToggleDropdown: () => {
    dispatch(toggleDropdown());
  },
  handleLogout: () => {
    dispatch(logout());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
