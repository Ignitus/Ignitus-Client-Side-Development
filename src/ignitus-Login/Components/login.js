import React from 'react';
import logo from '../../Assets/Images/Logos/logo white bg.png';
import '../Styles/style.css';

import Navigation from '../../ignitus-Navigation';
import Footer from '../../ignitus-Footer';

const Login = () => (
  <div>
    <Navigation />
    <div className="container-fluid">
      <div className="row">
        <div className="col-xs-4" />
        <div className="container _container rounded mt-5 col-xs-6">
          <div className="my-4">
            <img className="img-fluid _img mx-auto d-block" src={logo} alt="logo" />
          </div>
          <form>
            <div className="input-group form-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fa fa-envelope-o fa-fw" />
                </span>
              </div>
              <input
                type="text"
                id="email"
                className="form-control"
                placeholder="Email"
              />
            </div>
            <div className="input-group form-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fa fa-key fa-fw" />
                </span>
              </div>
              <input
                type="password"
                id="pass"
                className="form-control"
                placeholder="Password"
                required
              />
            </div>
            <div className="input-group form-group">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="gridCheck1"
                />
                <label className="form-check-label" htmlFor="gridCheck1">
                    Remember Me
                </label>
              </div>
            </div>
            <div className="text-center mb-3 mt-3">
              <button type="submit" className="btn btn-success px-3 py-2">
                <b>Sign in</b>
              </button>
            </div>
            <div className="_or-seperator">
              <i className="text-dark">or sign in with</i>
            </div>
            <div className="mb-4">
              <button className="btn btn-primary mx-auto btn-block" type="button">
                <i className="fa fa-linkedin mr-3" />
                <b>LinkedIn</b>
              </button>
            </div>
            <div className="text-center mb-3 mt-3">
              <div>
                  Don't have an account?
                {' '}
                <a href="/signup" className="text-center _link">
                  {' '}
                    Sign Up
                </a>
              </div>
            </div>
          </form>
        </div>
        <div className="col-xs-4" />
      </div>
    </div>
    <Footer />
  </div>
);

export default Login;
