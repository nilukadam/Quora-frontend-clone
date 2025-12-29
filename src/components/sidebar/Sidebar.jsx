import React from "react";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar bg-white border rounded p-3">
      <h6 className="fw-bold mb-3">Spaces</h6>
      <ul className="list-unstyled small">
        <li className="mb-2">React</li>
        <li className="mb-2">Frontend</li>
        <li className="mb-2">JavaScript</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
