import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Timeline from 'src/components/Timeline';

export default function Explorastro() {
  return (
    <div className="explorastro">
      <Header />
      <Switch>
        <Route exact path="/">
          <Redirect to="/timeline" />
        </Route>
        <Route exact path="/timeline">
          <Timeline />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}
