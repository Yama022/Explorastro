import React from 'react';
import { Link } from 'react-router-dom';
import Discover from './Discover';

export default function Timeline() {
  return (
    <div className="timeline">
      <aside className="timeline-left">
        <Link to="/discover" className="timeline-left__widget">
          <Discover />
        </Link>
      </aside>
      <main className="timeline-main">
        <div className="timeline-main__exploration"><h1>Exploration</h1></div>
      </main>
      <aside className="timeline-right">
        <div className="timeline-left__widget">
          Widget
        </div>
      </aside>
    </div>
  );
}
