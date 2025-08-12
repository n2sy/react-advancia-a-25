import React from "react";
import classes from "./navbar.module.css";
import { Link, NavLink } from "react-router";

function Navbar() {
  return (
    <div className={classes.header}>
      <div className={classes.logo}>Book Shop</div>
      <ul>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/all">All Books</Link>
        </li>
        <li>
          <Link to="/add">Add</Link>
        </li>
        <li>
          {/* <Link to="/favourites">Favourites</Link> */}
          <NavLink to="/favourites">
            {({ isActive }) => {
              console.log(isActive);
              return (
                <span className={isActive ? classes.activeclasse : null}>
                  Favourites
                </span>
              );
            }}
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
