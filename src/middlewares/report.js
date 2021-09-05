import { REPORT_BUG_MODAL, toggleReportModal } from 'src/actions/report';
import api from './utils/api';

const report = (store) => (next) => (action) => {
  switch (action.type) {
    case REPORT_BUG_MODAL: {
      const state = store.getState();
      const sendReport = async () => {
        try {
          await api.post('api/v1/report', {
            content: state.report.content,
            object: state.report.object,
          });
          store.dispatch(toggleReportModal());
        }
        catch (error) {
          // eslint-disable-next-line no-console
          console.error(error);
        }
      };
      sendReport();
      break;
    }
    default:
      next(action);
  }
};

export default report;
