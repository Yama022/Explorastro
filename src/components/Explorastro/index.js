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
import Exploration from 'src/containers/Exploration';
import Avatar from 'src/containers/Avatar';
import Particles from 'src/components/Particles';
import Loader from 'src/components/Loader';
import Project from 'src/components/Project';
import RGPD from 'src/components/RGPD';
import Report from 'src/components/Report';
import CGU from 'src/components/CGU';
import PatchNote from 'src/components/PatchNote';
import ForgottenPassword from 'src/components/ForgottenPassword';

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
    setTimeout(3000);
  }, []);

  if (!(typeof (isLogged) === 'boolean')) {
    return <Loader />;
  }

  return (
    <div className="explorastro">
      <Particles />
      <Report />
      <PatchNote />
      {!isLogged && <RGPD />}
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
            <Route exact path="/exploration/create">
              <Header />
              <CreateEvent />
              <Footer />
            </Route>
            <Route
              exact
              path="/exploration/:id"
              render={(prop) => (
                <>
                  <Header />
                  <Exploration id={Number(prop.match.params.id)} />
                  <Footer />
                </>
              )}
            />
            <Route exact path="/discover">
              <Header />
              <Discover />
              <Footer />
            </Route>
            <Route exact path="/cgu">
              <Header />
              <CGU />
              <Footer />
            </Route>
            <Route
              path="/formEvent/:id"
              render={(prop) => (
                <>
                  <Header />
                  <FormEvent id={Number(prop.match.params.id)} />
                  <Footer />
                </>
              )}
            />
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
              <Header />
              <Avatar />
              <Footer />
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
            <Route exact path="/landing">
              <Header />
              <Landing />
              <Footer />
            </Route>
            <Route exact path="/aboutus">
              <Header />
              <Project />
              <Footer />
            </Route>
            <Route exact path="/cgu">
              <Header />
              <CGU />
              <Footer />
            </Route>
            <Route exact path="/login/forgot/update">
              <ForgottenPassword />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/">
              <Redirect to="/landing" />
            </Route>
            <Route exact path="/timeline">
              <Redirect to="/landing" />
            </Route>
            <Route path="/guide">
              <Redirect to="/login" />
            </Route>
            <Route path="/exploration">
              <Redirect to="/login" />
            </Route>
            <Route exact path="/discover">
              <Redirect to="/login" />
            </Route>
            <Route path="/formEvent">
              <Redirect to="/login" />
            </Route>
            <Route path="/profile">
              <Redirect to="/login" />
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
  isLogged: PropTypes.bool,
  checkIsLogged: PropTypes.func.isRequired,
};

Explorastro.defaultProps = {
  isLogged: false,
};
