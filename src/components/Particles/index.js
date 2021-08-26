import React from 'react';

import Particles from 'react-particles-js';

export default function () {
  return (
    <Particles
      style={{ position: 'absolute', zIndex: -1 }}
      params={
      {
        particles: {
          number: {
            value: 150,
            density: {
              enable: true,
              value_area: 1200,
            },
          },
          line_linked: {
            enable: true,
            opacity: 0.015,
          },
          move: {
            direction: 'right',
            speed: 0.05,
          },
          size: {
            value: 1.5,
          },
          opacity: {
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.05,
            },
          },
        },
        interactivity: {
          events: {
            onclick: {
              enable: true,
              mode: 'push',
            },
          },
          modes: {
            push: {
              particles_nb: 1,
            },
          },
        },
        retina_detect: true,
      }
    }
    />
  );
}
