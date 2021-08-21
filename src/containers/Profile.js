import { connect } from 'react-redux';
import Profile from 'src/components/Profile';

const mapStateToProps = (state) => ({
  firstName: state.user.firstname,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
