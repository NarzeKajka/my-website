import React from "react";
import "./Navbar.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-name">
        Narze<span className="navbar-name-highlight">Kajka</span>
      </div>
      <div className="navbar-icons">
        <a
          href="https://github.com/NarzeKajka"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/kajadzielnicka/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
