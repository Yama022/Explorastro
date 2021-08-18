import React, { useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import Header from 'src/containers/Header';
import Footer from 'src/components/Footer';
import Timeline from 'src/components/Timeline';
import Error from 'src/components/Error';
import Discover from 'src/containers/Discover';
import CreateEvent from 'src/components/CreateEvent';
import Login from 'src/containers/Login';
import Guide from 'src/components/Guide';
import Landing from 'src/components/Landing';
import Settings from 'src/components/Settings';

export default function Explorastro({ isLogged, checkIsLogged }) {
  // useEffect(() => {
  //   checkIsLogged();
  // }, []);
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
            <Route>
              <Header />
              <Error />
              <Footer />
            </Route>
          </Switch>
        )}
    </div>
  );
}

Explorastro.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  checkIsLogged: PropTypes.func.isRequired,
};
