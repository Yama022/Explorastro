import { connect } from 'react-redux';
import Exploration from 'src/components/Exploration';

import { checkUserLogged } from 'src/actions/user';

const mapStateToProps = () => ({

});

const mapDispatchToProps = (dispatch) => ({
  checkIsLogged: () => {
    dispatch(checkUserLogged());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Exploration);
