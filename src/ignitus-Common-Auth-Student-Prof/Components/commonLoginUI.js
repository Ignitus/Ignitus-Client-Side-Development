import React from 'react';
import { Link } from 'react-router-dom';
import { withErrorBoundary } from '../../ignitus-Internals';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import * as t from './Constants';
import '../Styles/style.scss';

const commonLoginUI = () => (
  <div className="col-lg-12 col-sm-12 col-md-12 col-12 container-bg">
    <div className="p-0 p-sm-5 pt-5">
      <div className="col-lg-7 col-md-8 col-sm-12 col-12 mt-5 box-container">
        <div className="login-signup m-top">
          <h3> Sign In </h3>
          <p> Who are you? </p>
        </div>
        <div className="row mt-5">
          <div className=" col-lg-5 col-md-5 ml-lg-5 ml-md-4 col-sm-5 col p-0 h-50 common-auth-ui-css">
            <p className="mb-5 text-center common-ui-text">Student</p>
            <Link to="/login/student">
              <LazyLoadImage alt="Student auth" className="img-fluid" src={t.studentAuth} />
            </Link>
          </div>

          <div className="col-lg-5 col-md-5 ml-lg-4  ml-md-4 col-sm-5 ml-sm-4 col p-0 common-auth-ui-css">
            <p className="mb-5 text-center common-ui-text">Professor</p>
            <Link to="/login/professor">
              <LazyLoadImage alt="Professor auth" className="img-fluid" src={t.professorAuth} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default withErrorBoundary(commonLoginUI);
