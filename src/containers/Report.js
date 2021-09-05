import { connect } from 'react-redux';
import Report from 'src/components/Report';

import { reportBugModal, onReportChangeValue, toggleReportModal } from 'src/actions/report';

const mapStateToProps = (state) => ({
  content: state.report.content,
  object: state.report.object,
  reportModalIsOpen: state.report.reportModalIsOpen,
});

const mapDispatchToProps = (dispatch) => ({
  handleSubReport: (value) => {
    dispatch(reportBugModal(value));
  },
  reportChange: (value, key) => {
    dispatch(onReportChangeValue(value, key));
  },
  onToggleModal: () => {
    dispatch(toggleReportModal());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Report);
