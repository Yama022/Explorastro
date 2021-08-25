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
import Particles from 'src/components/Particles';

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
      <Particles />
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
