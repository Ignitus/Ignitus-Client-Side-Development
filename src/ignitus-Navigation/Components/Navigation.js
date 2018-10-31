import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import logo from '../../ignitus-Assets/Images/Logos/black_logo.png';


const Navigation = () => (
  <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
    <HashLink className="navbar-brand" to="/#">
      <img src={logo} width="40" height="40" alt="logo" />
    </HashLink>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="nav navbar-nav">
        <li className="nav-item active">
          <HashLink smooth to="/#">
            <span className="nav-link">
              Home
              {' '}
              <span className="sr-only">(current)</span>
            </span>
          </HashLink>
        </li>
        <li className="nav-item">
          <HashLink smooth to="/#what-we-do">
            <span className="nav-link">What we provide?</span>
          </HashLink>
        </li>
        <li className="nav-item">
          <HashLink smooth to="/#contributors">
            <span className="nav-link">Contributors</span>
          </HashLink>
        </li>
        <li className="nav-item">
          <Link to="/aboutus">
            <span className="nav-link" href="/aboutus">
              About
            </span>
          </Link>
        </li>
      </ul>
      <ul className="nav navbar-nav navbar-right ml-md-auto ">
        <li className="nav-item">
          <a
            className="nav-link"
            rel="noopener noreferrer"
            target="_blank"
            href="https://bit.ly/2NwWLhp"
          >
            Join
          </a>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdownMenuLink"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Sign in
          </a>
          <div
            className="dropdown-menu"
            aria-labelledby="navbarDropdownMenuLink"
          >
            <Link to="/login/student">
              <span className="dropdown-item">Student</span>
            </Link>
            <Link to="/login/professor">
              <span className="dropdown-item">Professor</span>
            </Link>
          </div>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdownMenuLink"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Sign up
          </a>
          <div
            className="dropdown-menu dropdown-menu-right"
            aria-labelledby="navbarDropdownMenuLink"
          >
            <Link to="/signup/student">
              <span className="dropdown-item">Student</span>
            </Link>
            <Link to="/signup/professor">
              <span className="dropdown-item">Professor</span>
            </Link>
          </div>
        </li>
      </ul>
    </div>
  </nav>
);
export default Navigation;
