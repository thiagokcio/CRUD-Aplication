import React from "react";
import { Link } from "react-router-dom";
import "./menu.css"

const Menu = () => {
  return (
    <nav className="nav-bar">
      <ul>
        <li>
          <Link to="/">Home</Link>{" "}
        </li>
        <li>
          <Link to="create">Create</Link>
        </li>
        <li>
          <Link to="read">Read</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
