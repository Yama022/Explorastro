import { connect } from 'react-redux';
import RGPD from 'src/components/RGPD';

import { modalRgpd } from 'src/actions/RGPD';

const mapStateToProps = (state) => ({
  modal: state.RGPD.modal,
});

const mapDispatchToProps = (dispatch) => ({
  setModal: () => {
    dispatch(modalRgpd());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(RGPD);
