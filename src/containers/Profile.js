import { connect } from 'react-redux';
import Profile from 'src/components/Profile';

import { changeProfileMenu, getUserInfo } from 'src/actions/profile';

const mapStateToProps = (state) => ({
  firstName: state.profile.firstname,
  lastName: state.profile.lastname,
  menuValue: state.profile.profileMenuValue,
  loggedUserId: state.user.loggedUserId,
});

const mapDispatchToProps = (dispatch) => ({
  changeMenuValue: (value) => {
    dispatch(changeProfileMenu(value));
  },
  getInfo: (value) => {
    dispatch(getUserInfo(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
