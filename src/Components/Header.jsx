import React from "react";

const Header = () => {
  return (
    <div>
      <header id="header" className="d-flex flex-column justify-content-center">
        <nav className="nav-menu">
          <ul>
            <li className="active">
              <a href="#hero">
                <i className="bx bx-home" /> <span>Home</span>
              </a>
            </li>
            <li>
              <a href="#about">
                <i className="bx bx-user" /> <span>About</span>
              </a>
            </li>
            <li>
              <a href="#skills">
                <i className="bx bx-file-blank" /> <span>Skills</span>
              </a>
            </li>
            <li>
              <a href="#portfolio">
                <i className="bx bx-book-content" /> <span>Portfolio</span>
              </a>
            </li>
            <li>
              <a href="#contact">
                <i className="bx bx-envelope" /> <span>Contact</span>
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
