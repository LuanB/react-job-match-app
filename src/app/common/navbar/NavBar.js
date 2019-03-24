import React from 'react';

import { NavLink, withRouter } from 'react-router-dom';

const NavBar = (prps) => {
  return (
    <nav className="nav-wrapper blue darken-3">
      <div className="container">
        <div className="left">
          <a href="/" className="brand-logo">
            OnDemand Jobs App
          </a>
        </div>
        <ul className="right">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/jobsavailable">JobsAvailable</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default withRouter(NavBar);
