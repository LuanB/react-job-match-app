import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

const NavBarJob = () => {
  return (
    <nav className="nav-wrapper blue darken-2">
      <div className="container">
        <ul className="left">
          <li className="active">
            <NavLink to="/">Jobs Available</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default withRouter(NavBarJob);
