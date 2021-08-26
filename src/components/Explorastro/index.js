/* eslint-disable react/button-has-type */
import React, { useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import Header from 'src/containers/Header';
import Footer from 'src/components/Footer';
import Timeline from 'src/containers/Timeline';
import Error from 'src/components/Error';
import Discover from 'src/containers/Discover';
import CreateEvent from 'src/containers/CreateEvent';
import Login from 'src/containers/Login';
import Guide from 'src/components/Guide';
import Landing from 'src/components/Landing';
import Photo from 'src/components/Guide/Photo';
import Visuel from 'src/components/Guide/Visuel';
import Profile from 'src/containers/Profile';
import Settings from 'src/containers/Settings';
import FormEvent from 'src/containers/FormEvent';
import Exploration from 'src/components/Exploration';
import Avatar from 'src/components/Avatar';

import Particles from 'react-particles-js';

import { IoIosArrowUp } from 'react-icons/io';

export default function Explorastro({ isLogged, checkIsLogged }) {
  useEffect(() => {
    window.addEventListener('scroll', () => {
      const button = document.querySelector('.button__return__top');
      if (window.scrollY > 650) {
        button.style.display = 'block';
      }
      else {
        button.style.display = 'none';
      }
    });
    checkIsLogged();
  }, []);

  return (
    <div className="explorastro">
      <Particles
        style={{
          position: 'fixed', zIndex: -1, top: 0, bottom: 0, left: 0, right: 0,
        }}
        params={
          {
            particles: {
              number: {
                value: 100,
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
                distance: 70,
                color: '#f8f8ff',
                opacity: 0.05,
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
                  mode: 'bubble',
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
                  particles_nb: 4,
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
      {isLogged
        ? (
          <Switch>
            <Route exact path="/">
              <Redirect to="/timeline" />
            </Route>
            <Route exact path="/landing">
              <Redirect to="/timeline" />
            </Route>
            <Route exact path="/login">
              <Redirect to="/timeline" />
            </Route>
            <Route exact path="/timeline">
              <Header />
              <Timeline />
              <Footer />
            </Route>
            <Route exact path="/exploration">
              <Header />
              <Exploration />
              <Footer />
            </Route>
            <Route exact path="/exploration/create">
              <Header />
              <CreateEvent />
              <Footer />
            </Route>
            <Route exact path="/discover">
              <Header />
              <Discover />
              <Footer />
            </Route>
            <Route path="/formEvent/:id" component={FormEvent} />
            <Route exact path="/guide">
              <Header />
              <Guide />
              <Footer />
            </Route>
            <Route exact path="/guide/photo">
              <Header />
              <Photo />
              <Footer />
            </Route>
            <Route exact path="/guide/visuel">
              <Header />
              <Visuel />
              <Footer />
            </Route>
            <Route exact path="/avatar">
              <Avatar />
            </Route>
            <Route exact path="/login">
              <Redirect to="/timeline" />
            </Route>
            <Route
              path="/profile/:id"
              render={(prop) => (
                <>
                  <Header />
                  <Profile profileId={Number(prop.match.params.id)} />
                  <Footer />
                </>
              )}
            />
            <Route exact path="/settings">
              <Header />
              <Settings />
              <Footer />
            </Route>
            <Route>
              <Header />
              <Error />
              <Footer />
            </Route>
          </Switch>
        )
        : (
          <Switch>
            <Route exact path="/">
              <Redirect to="/landing" />
            </Route>
            <Route exact path="/landing">
              <Header />
              <Landing />
              <Footer />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/settings">
              <Redirect to="/login" />
            </Route>
            <Route>
              <Header />
              <Error />
              <Footer />
            </Route>
          </Switch>
        )}
      <button
        type="button"
        className="button__return__top button --secondary animate__animated animate__fadeInRight animate__faster"
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
        }}
      >
        <IoIosArrowUp />
      </button>
    </div>
  );
}

Explorastro.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  checkIsLogged: PropTypes.func.isRequired,
};
