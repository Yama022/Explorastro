import { connect } from 'react-redux';
import Timeline from 'src/components/Timeline';

import { getUserTimeline } from 'src/actions/timeline';

const mapStateToProps = (state) => ({
  loading: state.user.loading,
  loggedUserId: state.user.loggedUserId,
  timelineContent: state.timeline.timelineContent,
});

const mapDispatchToProps = (dispatch) => ({
  getTimeline: () => {
    dispatch(getUserTimeline());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Timeline);
