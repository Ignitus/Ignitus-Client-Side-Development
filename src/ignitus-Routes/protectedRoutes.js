
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Notfound } from './notFound';
import PrivateRoute from './privateRoute';
import Dashboard from '../ignitus-Dashboard';
import dashBoardHeader from '../ignitus-Dashboard-Header';

export const ProtectedRoutes = props => (
  <div>
    <dashBoardHeader.containers.dashboardHeaderContainer />
    <Switch>
      <Route
        exact
        path="/"
        render={() => (
          <div className="content">
            <Notfound />
          </div>
        )}
      />
      <PrivateRoute path="/dashboard" component={Dashboard.components.Dashboard} />
    </Switch>
  </div>
);
