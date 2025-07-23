import { NavLink } from "react-router-dom";

const Header = () => (
  <header className="bg-dark text-light">
    <div className="container py-3">
      <h1 className="display-3 fw-medium mb-1">My Food Delivery Website</h1>
      <nav>
        <ul className="nav">
          <li className="nav-item">
            <NavLink className="nav-link text-primary" to="/">
              Overview
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-primary" to="/restaurants">
              Restaurants
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-primary" to="/about">
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
