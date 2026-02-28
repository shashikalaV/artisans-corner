import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-purple shadow-sm">
      <div className="container">
        <NavLink className="navbar-brand fw-bold text-white fs-4" to="/">
          Artisan's Corner
        </NavLink>

        <button
          className="navbar-toggler bg-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            <li className="nav-item mx-2">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "nav-link nav-btn active-link"
                    : "nav-link nav-btn"
                }
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item mx-2">
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  isActive
                    ? "nav-link nav-btn active-link"
                    : "nav-link nav-btn"
                }
              >
                Products
              </NavLink>
            </li>

            <li className="nav-item mx-2">
              <NavLink
                to="/account"
                className={({ isActive }) =>
                  isActive
                    ? "nav-link nav-btn active-link"
                    : "nav-link nav-btn"
                }
              >
                Account
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;