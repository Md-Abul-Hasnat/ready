import React from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../img/logo.png";
import "./navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);

  function handleClick() {
    setClick(!click);
  }

  return (
    <nav className="navbar">
      <div className="navbar-main">
        <Link className="logo" to="/">
          <img src={logo} alt="logo" />
        </Link>
        <ul className={click ? "nav-links active" : "nav-links"}>
          <li>
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/">
              Services
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/">
              Contact
            </NavLink>
          </li>
          <i onClick={handleClick} class="fa-solid fa-xmark"></i>
        </ul>
        <i onClick={handleClick} class="fa-solid fa-bars"></i>
      </div>
    </nav>
  );
};

export default Navbar;
