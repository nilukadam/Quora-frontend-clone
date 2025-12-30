import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

/*
  Navbar Component
  Purpose:
  - Shows main navigation links
  - Works globally across all pages
  - Uses NavLink for active route styling
*/

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand bg-white border-bottom px-3">
      
      {/* App brand / logo */}
      <span className="navbar-brand fw-bold">
        QuoraClone
      </span>

      {/* Center navigation links */}
      <ul className="navbar-nav mx-auto gap-4">
        
        {/* NavLink automatically adds active class on route match */}
        <li className="nav-item">
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="/following">
            Following
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="/notifications">
            Notifications
          </NavLink>
        </li>
      </ul>

      {/* Ask Question button (logic will be added in later phase) */}
      <button className="btn btn-danger btn-sm">
        Ask Question
      </button>

    </nav>
  );
};

export default Navbar;
