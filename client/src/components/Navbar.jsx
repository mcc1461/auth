import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ isLoggedIn, handleLogout }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary mt-3 lh-lg">
      <div className="container-fluid">
        <Link className="navbar-brand text-light me-3" to="/">
          MusCo - Mustering Code
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {!isLoggedIn ? (
              <>
                <li className="nav-item">
                  <Link
                    to="/login"
                    className="btn btn-outline-light me-3 mb-2 mb-lg-0 mt-2 mt-lg-0"
                  >
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/register"
                    className="btn btn-outline-light mb-2 mb-lg-0 mt-2 mt-lg-0"
                  >
                    Register
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link
                    to="/dashboard"
                    className="btn btn-outline-light me-3 mb-2 mb-lg-0 mt-2 mt-lg-0"
                  >
                    Dashboard
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/"
                    className="btn btn-outline-light me-3 mb-2 mb-lg-0 mt-2 mt-lg-0"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <button
                    className="btn btn-outline-light mb-2 mb-lg-0 mt-2 mt-lg-0"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
