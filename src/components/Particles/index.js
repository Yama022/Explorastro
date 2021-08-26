import React from 'react';

import Particles from 'react-particles-js';

export default function () {
  return (
    <Particles
      style={{
        position: 'fixed', zIndex: -1, top: 0, bottom: 0, left: 0, right: 0,
      }}
      params={
          {
            particles: {
              number: {
                value: 120,
                density: {
                  enable: true,
                  value_area: 1000,
                },
              },
              color: {
                value: '#f8f8ff',
              },
              shape: {
                type: 'circle',
                stroke: {
                  width: 0,
                  color: '#f8f8ff',
                },
                polygon: {
                  nb_sides: 5,
                },
              },
              opacity: {
                value: 1,
                random: true,
                anim: {
                  enable: true,
                  speed: 0.2,
                  opacity_min: 0,
                  sync: false,
                },
              },
              size: {
                value: 1.5,
                random: true,
                anim: {
                  enable: false,
                  speed: 1,
                  size_min: 0.3,
                  sync: false,
                },
              },
              line_linked: {
                enable: true,
                distance: 65,
                color: '#f8f8ff',
                opacity: 0.04,
                width: 1,
              },
              move: {
                enable: true,
                speed: 0.1,
                direction: 'none',
                random: true,
                straight: false,
                out_mode: 'out',
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 600,
                },
              },
            },
            interactivity: {
              detect_on: 'window',
              events: {
                onhover: {
                  enable: true,
                  mode: 'remove',
                },
                onclick: {
                  enable: true,
                  mode: 'push',
                },
                resize: true,
              },
              modes: {
                grab: {
                  distance: 400,
                  line_linked: {
                    opacity: 1,
                  },
                },
                bubble: {
                  distance: 250,
                  size: 0,
                  duration: 2,
                  opacity: 0,
                  speed: 3,
                },
                repulse: {
                  distance: 400,
                  duration: 0.4,
                },
                push: {
                  particles_nb: 1,
                },
                remove: {
                  particles_nb: 2,
                },
              },
            },
            retina_detect: true,
          }
    }
    />
  );
}
