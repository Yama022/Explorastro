import { connect } from 'react-redux';
import Explorastro from 'src/components/Explorastro';

import { checkUserLogged } from 'src/actions/user';

const mapStateToProps = (state) => ({
  loading: state.user.loading,
  isLogged: state.user.logged,
});

const mapDispatchToProps = (dispatch) => ({
  checkIsLogged: () => {
    dispatch(checkUserLogged());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Explorastro);
