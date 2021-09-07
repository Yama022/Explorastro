import { MODAL_RGPD, changeValueModalRgpd } from 'src/actions/RGPD';

const RGPD = (store) => (next) => (action) => {
  switch (action.type) {
    case MODAL_RGPD: {
      const state = store.getState();
      const now = new Date();
      const expiry = now.setDate(now.getDate() + 7);
      const cookie = {
        value: state.RGPD.modal,
        expiry,
      };
      localStorage.setItem('cookie', JSON.stringify(cookie));
      store.dispatch(changeValueModalRgpd());
      break;
    }
    default:
      next(action);
  }
};

export default RGPD;
