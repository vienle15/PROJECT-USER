import React from "react";
import Product from "../pages/products/Product";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, AuthState } from "../redux/Slice/AuthSlice";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userLogin = useSelector((state: { auth: AuthState }) => state.auth);
  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("loggedIn");
    navigate("/signin");
  };

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
          <div className="container-fluid">
            <a className="navbar-brand" onClick={() => navigate("/")}>
              VShoes
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/product"
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                  >
                    Products
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>

              <div className="d-flex feature" role="search" id="navbar-feature">
                {userLogin.isLoggedIn === false ? (
                  <>
                    {" "}
                    <a
                      onClick={() => navigate("/signin")}
                      className="btn btn-outline-success"
                    >
                      Login
                    </a>
                    <a
                      onClick={() => navigate("/register")}
                      className="btn btn-outline-info"
                    >
                      Register
                    </a>
                  </>
                ) : (
                  <>
                    {" "}
                    <a onClick={() => navigate("/cart")}>
                      <i className="fa-solid fa-cart-plus fa-beat" />
                    </a>
                    <a onClick={() => navigate("/profile")}>
                      <i className="fa-solid fa-user fa-beat" />
                    </a>
                    <a
                      onClick={handleLogout}
                      className="btn btn-outline-success"
                    >
                      Logout
                    </a>
                  </>
                )}
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
