import React from 'react';
import { Link } from 'react-router-dom';
import Discover from './Discover';
import Follow from './Follow';
import HasFollow from './HasFollow';
import Comment from './Comment';

export default function Timeline() {
  return (
    <div className="timeline">
      <aside className="timeline-left">
        <Link to="/discover" className="timeline-left__widget">
          <Discover />
        </Link>
      </aside>
      <main className="timeline-main">
        <div className="timeline-main__exploration">
          <Follow />
          <HasFollow />
          <Comment />
        </div>
      </main>
      <aside className="timeline-right">
        <div className="timeline-left__widget">
          Widget
        </div>
      </aside>
    </div>
  );
}
