import { connect } from 'react-redux';
import Profile from 'src/components/Profile';

import { changeProfileMenu } from 'src/actions/profile';

const mapStateToProps = (state) => ({
  firstName: state.profile.firstname,
  lastName: state.profile.lastname,
  menuValue: state.profile.profileMenuValue,
  loggedUserId: state.profile.loggedUserId,
});

const mapDispatchToProps = (dispatch) => ({
  changeMenuValue: (value) => {
    dispatch(changeProfileMenu(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
