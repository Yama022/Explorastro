import React from 'react';
import night from 'src/assets/images/night.jpg';

export default function Discover() {
  return (
    <div className="timeline-discover animate__animated animate__fadeInLeft">
      <img src={night} alt="Night Earth" />
      <p>Découvrir</p>
    </div>
  );
}
