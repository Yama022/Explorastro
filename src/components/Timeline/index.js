import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Discover from './Discover';
import Follow from './Follow';
import HasFollow from './HasFollow';
import Comment from './Comment';
import NewExploration from './NewExploration';
import UpdateAvatar from './UpdateAvatar';
import Participation from './Participation';
import Description from './Description';

export default function Timeline({ loggedUserId }) {
  return (
    <div className="timeline">
      <aside className="timeline-left">
        <Link to="/discover" className="timeline-left__widget">
          <Discover />
          <Discover />
          <Discover />
        </Link>
      </aside>
      <main className="timeline-main">
        <div className="timeline-main__exploration">
          <Description />
          <Participation />
          <UpdateAvatar />
          <Follow />
          <HasFollow loggedUserId={loggedUserId} />
          <Comment />
          <NewExploration />
        </div>
      </main>
      <aside className="timeline-right">
        <div className="timeline-left__widget">
          <Discover />
          <Discover />
        </div>
      </aside>
    </div>
  );
}

Timeline.propTypes = {
  loggedUserId: PropTypes.number.isRequired,
};
