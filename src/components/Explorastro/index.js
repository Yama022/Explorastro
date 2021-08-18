import React, { useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import Header from 'src/containers/Header';
import Footer from 'src/components/Footer';
import Timeline from 'src/components/Timeline';
import Error from 'src/components/Error';
import Discover from 'src/containers/Discover';
import CreateEvent from 'src/containers/CreateEvent';
import Login from 'src/containers/Login';
import Guide from 'src/components/Guide';
import Landing from 'src/components/Landing';
import Photo from 'src/components/Guide/Photo';
import Visuel from 'src/components/Guide/Visuel';

import { FcCollapse } from 'react-icons/fc';

export default function Explorastro({ isLogged, checkIsLogged }) {
  useEffect(() => {
    window.addEventListener('scroll', (e) => {
      const button = document.querySelector('.button__return__top');
      if (window.scrollY>650) {
        button.style.display= "block"
      }
      else {
        button.style.display= "none"
      }})
      checkIsLogged();
  }, []);

  return (
    <div className="explorastro">
      {isLogged
        ? (
          <Switch>
            <Route exact path="/">
              <Header />
              <Redirect to="/timeline" />
              <Footer />
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
            <Route exact path="/discover">
              <Header />
              <Discover />
              <Footer />
            </Route>
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
            <Route exact path="/login">
              <Redirect to="/timeline" />
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
            <Route>
              <Header />
              <Error />
              <Footer />
            </Route>
          </Switch>
        )}
        <div className="button__return__top">
      <button onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }}>
      <FcCollapse className="button__return__top__button" />
      </button>
      </div>
    </div>
    
  );
}

Explorastro.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  checkIsLogged: PropTypes.func.isRequired,
};

