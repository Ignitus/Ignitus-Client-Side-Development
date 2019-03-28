import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

class PrivateRoute extends React.Component {
  render() {
    const Component = this.props.component;
    return (
      <Route
        render={() => (localStorage.getItem('authenticated') ? (
          <Component {...this.props} />
        ) : (
          <Redirect to="/login/student" />
        ))
        }
      />
    );
  }
}

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default PrivateRoute;
