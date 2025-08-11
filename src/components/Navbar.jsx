import React from "react";
import classes from "./navbar.module.css";
import { Link } from "react-router";

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
          <Link to="/favourites">Favourites</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
