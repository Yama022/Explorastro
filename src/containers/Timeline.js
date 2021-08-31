import { connect } from 'react-redux';
import Timeline from 'src/components/Timeline';

import { getUserTimeline } from 'src/actions/timeline';

import { getUserInfo } from 'src/actions/profile';

const mapStateToProps = (state) => ({
  loading: state.user.loading,
  loggedUserId: state.user.loggedUserId,
  timelineContent: state.timeline.timelineContent,
  following: state.profile.following,
});

const mapDispatchToProps = (dispatch) => ({
  getTimeline: () => {
    dispatch(getUserTimeline());
  },
  getInfo: (value) => {
    dispatch(getUserInfo(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Timeline);
