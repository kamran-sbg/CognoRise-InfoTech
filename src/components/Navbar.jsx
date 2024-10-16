import React, { useState } from "react";

import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="/" className="title">
        Kamran
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to={'calculator'}>Calculator</NavLink>
        </li>
        <li>
          <NavLink to="/todolist">TodoList</NavLink>
        </li>
        <li>
          <NavLink to="/timer">Timer</NavLink>
        </li>
      </ul>
    </nav>
  );
};
