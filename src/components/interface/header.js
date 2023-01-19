import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import classes from './header.module.css';

const Header = () => (
  <header className={classes.header}>
    <nav className={classes.nav_bar}>
      <div className={classes.nav_title}>
        <h1>
          <Link to="/">Math Magicians</Link>
        </h1>
      </div>
      <ul className={classes.nav_items}>
        <li className={classes.nav_item}>
          <NavLink className={classes.nav_link} to="/home">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={classes.nav_link} to="/calculator">
            Calculator
          </NavLink>
        </li>
        <li>
          <NavLink className={classes.nav_link} to="/quote">
            Quote
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
