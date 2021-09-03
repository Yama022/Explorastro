import { connect } from 'react-redux';
import Avatar from 'src/components/Avatar';

import { uploadAvatar } from 'src/actions/profile';

const mapStateToProps = (state) => ({
  loggedUserId: state.user.loggedUserId,
});

const mapDispatchToProps = (dispatch) => ({
  handleAvatarUpload: (value) => {
    dispatch(uploadAvatar(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Avatar);
