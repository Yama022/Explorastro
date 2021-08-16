import { connect } from 'react-redux';
import Explorastro from 'src/components/Explorastro';

const mapStateToProps = (state) => ({
  isLogged: state.user.logged,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Explorastro);
