import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Loader from 'src/components/Loader';

import Discover from './Discover';
import Follow from './Follow';
import Comment from './Comment';
import NewExploration from './NewExploration';
import UpdateAvatar from './UpdateAvatar';
import Participation from './Participation';
import Description from './Description';
import Following from './Following';
import Search from './Search';

const ACTION = {
  FOLLOW: 'FOLLOW',
  COMMENT: 'COMMENT',
  PARTICIPATION: 'PARTICIPATION',
  EXPLORATION: 'EXPLORATION',
  AVATAR: 'AVATAR',
  BIO: 'BIO',
  UPDATE: 'UPDATE',
};

export default function Timeline({
  getTimeline,
  loggedUserId,
  timelineContent,
  following,
  getInfo,
  changeField,
  searchInput,
  searchForPeople,
  searchResult,
  isLoading,
}) {
  useEffect(() => {
    getTimeline();
    getInfo(loggedUserId);
  }, []);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="timeline">
      <aside className="timeline-left">
        <Link to="/discover" className="timeline-left__widget">
          <Discover />
        </Link>
      </aside>
      {(timelineContent.length === 0)
        ? (
          <div className="timeline-main animate__animated animate__slideInUp">
            <h1 className="main-title">Cherche de nouveaux amis pour ne rien manquer de leur activité !</h1>
          </div>
        )
        : (
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
        )}
      <aside className="timeline-right">
        <div className="timeline-right__widget">
          <Following following={following} />
          <Search
            changeField={changeField}
            searchInput={searchInput}
            searchForPeople={searchForPeople}
            searchResult={searchResult}
          />
        </div>
      </aside>
    </div>
  );
}

Timeline.propTypes = {
  loggedUserId: PropTypes.number.isRequired,
  getTimeline: PropTypes.func.isRequired,
  timelineContent: PropTypes.array,
  following: PropTypes.array,
  getInfo: PropTypes.func.isRequired,
  changeField: PropTypes.func.isRequired,
  searchInput: PropTypes.string.isRequired,
  searchForPeople: PropTypes.func.isRequired,
  searchResult: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

Timeline.defaultProps = {
  timelineContent: [],
  following: [],
};
