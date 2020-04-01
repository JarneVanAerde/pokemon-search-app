import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import "../../styles/Nav.scss";

/**
 * This component will render the navigation for the application.
 */
const Nav = (): ReactElement => {
  return (
    <nav>
      <Link to="/home">Home</Link>
      <Link to="/search">Search</Link>
    </nav>
  );
};

export default Nav;
