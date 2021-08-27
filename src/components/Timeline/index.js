import React, { useEffect } from 'react';
import Loader from 'src/components/Loader';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Discover from './Discover';
import Follow from './Follow';
import Comment from './Comment';
import NewExploration from './NewExploration';
import UpdateAvatar from './UpdateAvatar';
import Participation from './Participation';
import Description from './Description';

const ACTION = {
  FOLLOW: 'FOLLOW',
  COMMENT: 'COMMENT',
  PARTICIPATION: 'PARTICIPATION',
  EXPLORATION: 'EXPLORATION',
  AVATAR: 'AVATAR',
  BIO: 'BIO',
  UPDATE: 'UPDATE',
};

export default function Timeline({ getTimeline, loggedUserId, timelineContent }) {
  useEffect(() => {
    getTimeline();
  }, []);

  if (timelineContent.length === 0) {
    return <Loader />;
  }

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
          {
            timelineContent.map((content) => {
              // I extract the id of the object
              const { _id } = content;
              switch (content.type) {
                case ACTION.COMMENT:
                  return <Comment key={_id} props={content} />;
                case ACTION.FOLLOW:
                  return <Follow key={_id} props={content} loggedUserId={loggedUserId} />;
                case ACTION.PARTICIPATION:
                  return <Participation key={_id} props={content} />;
                case ACTION.EXPLORATION:
                  return <NewExploration key={_id} props={content} />;
                case ACTION.AVATAR:
                  return <UpdateAvatar key={_id} props={content} />;
                case ACTION.BIO:
                  return <Description key={_id} props={content} />;
                default:
                  return null;
              }
            })
            }
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
  getTimeline: PropTypes.func.isRequired,
  timelineContent: PropTypes.array.isRequired,
};
