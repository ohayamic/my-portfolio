import React from "react";
import { Link } from "react-router-dom";

const MiniNavBar = () => {
  return (
    <div>
      <nav>
        <div className="nav-center">
          <h4>color flipper</h4>
          <ul className="nav-links">
            <li>
              <Link to="/">simple</Link>
            </li>
            <li>
              <Link to="/hex">hex</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default MiniNavBar;
