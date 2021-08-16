import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import Header from 'src/containers/Header';
import Footer from 'src/components/Footer';
import Timeline from 'src/components/Timeline';
import Error from 'src/components/Error';
import Discover from 'src/containers/Discover';
import CreateEvent from 'src/components/CreateEvent';
import Login from 'src/components/Login';
import Guide from 'src/components/Guide';

export default function Explorastro({ isLogged }) {
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
};
