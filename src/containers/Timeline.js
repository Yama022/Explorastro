import { connect } from 'react-redux';
import Timeline from 'src/components/Timeline';

import { getUserTimeline, changeValueTimeline, searchPeople } from 'src/actions/timeline';

import { getUserInfo } from 'src/actions/profile';

const mapStateToProps = (state) => ({
  loading: state.user.loading,
  loggedUserId: state.user.loggedUserId,
  timelineContent: state.timeline.timelineContent,
  following: state.profile.following,
  searchInput: state.timeline.searchInput,
  searchResult: state.timeline.searchResult,
  isLoading: state.timeline.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  getTimeline: () => {
    dispatch(getUserTimeline());
  },
  getInfo: (value) => {
    dispatch(getUserInfo(value));
  },
  changeField: (value, key) => {
    dispatch(changeValueTimeline(value, key));
  },
  searchForPeople: () => {
    dispatch(searchPeople());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Timeline);
