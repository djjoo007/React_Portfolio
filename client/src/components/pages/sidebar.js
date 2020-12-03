
import React from 'react';
import { bubble as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';

class Sidebar extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {

  return (
    <Menu>

      <button className="nav-toggle" aria-label="toggle navigation">
        <span className="hamburger"></span>
      </button>

        <nav className="nav">
          <ul className="nav__list">
              <li className="nav__item">
                <Link to="/" className={window.location.pathname === "/" ? "nav_link active" : "nav_link"}>Home
                </Link>
              </li>

              <li className="nav_item">
                <Link to="/#services" className={window.location.pathname === "/#services" ? "nav_link active" : "nav_link"}>My Information
                </Link>
              </li>

              <li className="nav_item">
                <Link to="/#about" className={window.location.pathname === "/#about" ? "nav_link active" : "nav_link"}>About Me
                </Link>
              </li>

              <li className="nav_item">
                <Link to="/#work" className={window.location.pathname === "/#work" ? "nav_link active" : "nav_link"}>My Portfolio
                </Link>
              </li>
{/* 
              <li className="nav__item">
                <a href="#services" className="nav__link">My Information</a></li>
                        <li className="nav__item"><a href="#about" className="nav__link">About me</a></li>
                        <li className="nav__item"><a href="#work" className="nav__link">My Portfolio</a></li> */}
                    </ul>
                </nav>

    </Menu>
  );
}
}


export default Sidebar;
