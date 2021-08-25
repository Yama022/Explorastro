import { connect } from 'react-redux';
import Timeline from 'src/components/Timeline';

import { getUserInfo } from 'src/actions/profile';

// fonction qui permet de relier les props du composant stateless
// avec les propriétés du state, elle retourne un objet
const mapStateToProps = (state) => ({
  loggedUserId: state.user.loggedUserId,
});

const mapDispatchToProps = (dispatch) => ({
  getInfo: (value) => {
    dispatch(getUserInfo(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Timeline);
