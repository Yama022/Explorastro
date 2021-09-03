import React from 'react';

const Loading = () => (
  <div className="loader__main">
    <div className="loader__main__content">
      <div className="sun" />
      <div className="orbit orbit1">
        <div className="planetX planet1" />
      </div>
      <div className="orbit orbit2">
        <div className="planetX planet2" />
      </div>
      <div className="orbit orbit3">
        <div className="planetX planet3" />
      </div>
    </div>
  </div>
);

export default Loading;
