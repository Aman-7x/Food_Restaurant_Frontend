import { Link, NavLink } from "react-router-dom";
import "../../Style.css";

export const Header = () => {
  return (
    <header className="row m-0 p-0">
      <div className="offset-md-4 col-md-8">
        <ul className="nav justify-content-around align-items-center m-0 p-0">
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link active mt-3" : "nav-link"
              }
              aria-current="page"
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link active mt-3" : "nav-link"
              }
              to="/menu"
            >
              Menu
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link active mt-3" : "nav-link"
              }
              to="/pages"
            >
              Pages
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link active mt-3 " : "nav-link"
              }
              aria-disabled="true"
              to={"/delivery"}
            >
              Delivery
            </NavLink>
          </li>
          <li className="nav-item">
            <a className="nav-link" aria-disabled="true">
              News
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" aria-disabled="true">
              Features
            </a>
          </li>
          <li className="nav-item">
            <button className="btn btn-transparent border-light">
              Table Booking
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};
