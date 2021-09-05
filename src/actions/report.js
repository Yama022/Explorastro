export const REPORT_BUG_MODAL = 'REPORT_BUG_MODAL';
export const GET_INITIAL_STATE = 'GET_INITIAL_STATE';
export const ON_REPORT_CHANGE_VALUE = 'ON_REPORT_CHANGE_VALUE';
export const SEND_REPORT = 'SEND_REPORT';
export const TOGGLE_REPORT_MODAL = 'TOGGLE_REPORT_MODAL';

export const reportBugModal = (value) => ({
  type: REPORT_BUG_MODAL,
  value,
});

export const getInitialState = () => ({
  type: GET_INITIAL_STATE,
});

export const onReportChangeValue = (value, key) => ({
  type: ON_REPORT_CHANGE_VALUE,
  value,
  key,
});

export const sendReport = () => ({
  type: SEND_REPORT,
});

export const toggleReportModal = () => ({
  type: TOGGLE_REPORT_MODAL,
});
