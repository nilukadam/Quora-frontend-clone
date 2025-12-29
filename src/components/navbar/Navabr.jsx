import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand bg-white border-bottom px-3">
      <span className="navbar-brand fw-bold">QuoraClone</span>

      <ul className="navbar-nav mx-auto gap-4">
        <li className="nav-item">
          <NavLink className="nav-link" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/following">Following</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/notifications">Notifications</NavLink>
        </li>
      </ul>

      <button className="btn btn-danger btn-sm">Ask Question</button>
    </nav>
  );
};

export default Navbar;
