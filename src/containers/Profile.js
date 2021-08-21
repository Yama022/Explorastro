import { connect } from 'react-redux';
import Profile from 'src/components/Profile';

const mapStateToProps = (state) => ({
  firstName: state.user.firstname,
  lastName: state.user.lastname,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
