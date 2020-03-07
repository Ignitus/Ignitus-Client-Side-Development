/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React, { useState } from 'react';
import isEmpty from 'lodash/isEmpty';
import PropTypes from 'prop-types';
import { withErrorBoundary } from '../../ignitus-Internals';
import SharedLogin from '../../shared/Components/Login/Login';
import { statePayload } from '../../shared/Components/Login/Constants';

const Login = ({ logInRequest, professorLogInData }) => {
  const [state, setState] = useState(statePayload);

  const { email, password } = state;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEmpty(email) || isEmpty(password)) {
      setState({
        ...state,
        emptyMessage: true,
      });
      return;
    }

    if (typeof email !== 'undefined') {
      const lastAtPos = email.lastIndexOf('@');
      const lastDotPos = email.lastIndexOf('.');

      if (
        !(
          lastAtPos < lastDotPos
            && lastAtPos > 0
            && email.indexOf('@@') === -1
            && lastDotPos > 2
            && email.length - lastDotPos > 2
        )
      ) {
        setState({
          ...state,
          invalidEmail: true,
        });
        return;
      }
    }
    logInRequest(email, password);
    setState({
      ...state,
      email: '',
      password: '',
      emptyMessage: false,
    });
  };

  return (
    <SharedLogin
      loginType="Professor"
      tagline="Help providing opportunities for your students"
      handleSubmit={handleSubmit}
      logInData={professorLogInData}
      state={state}
      setState={setState}
    />
  );
};

Login.propTypes = {
  logInRequest: PropTypes.func.isRequired,
  professorLoginData: PropTypes.shape({
    isFetching: PropTypes.bool.isRequired,
    message: PropTypes.string.isRequired,
    success: PropTypes.bool.isRequired,
  }).isRequired,
};

export default withErrorBoundary(Login);
