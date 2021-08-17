import { connect } from 'react-redux';
import Explorastro from 'src/components/Explorastro';

import { checkUserLogged } from 'src/actions/user';

const mapStateToProps = (state) => ({
  isLogged: state.user.logged,
});

const mapDispatchToProps = (dispatch) => ({
  checkIsLogged: () => {
    dispatch(checkUserLogged());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Explorastro);
