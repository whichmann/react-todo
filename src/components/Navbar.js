import React from "react";
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="nav-wrapper blue darken-4">
      <div className="container">
        <a className="brand-logo">To-do App</a>
        <ul className="right">
          <li>
            <Link to="./App">App</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          {/* <li>
            <Link to="/Caller">Call for randomness</Link>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;